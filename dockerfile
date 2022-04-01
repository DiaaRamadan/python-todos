FROM python:3.8
RUN adduser --system --group app
WORKDIR /app
COPY python_packages.sh /app/python_packages.sh
USER root
RUN apt-get -y update && apt-get install -y python3-flask
RUN ["chmod", "+x", "./docker_entrypoint.sh"]
USER app
RUN ["/app/docker_entrypoint.sh"]
COPY . .
EXPOSE 5000
CMD FLASK_APP=app.py FLASK_DEBUG=true flask run
