FROM python:3.8
RUN adduser --system --group app
WORKDIR /app
COPY docker_entrypoint.sh /app/docker_entrypoint.sh
USER root
RUN ["chmod", "+x", "./docker_entrypoint.sh"]
RUN ["/app/docker_entrypoint.sh"]
USER app