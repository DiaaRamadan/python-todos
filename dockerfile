FROM python:3.8
RUN adduser --system --group app
WORKDIR /app
COPY python_packages.sh /app/python_packages.sh
USER root
RUN apt-get -y update && apt-get install -y python3-flask
RUN ["chmod", "+x", "./python_packages.sh"]
USER app
RUN ["./python_packages.sh"]
COPY . .
EXPOSE 5000
CMD FLASK_APP=app.py FLASK_DEBUG=true flask run
