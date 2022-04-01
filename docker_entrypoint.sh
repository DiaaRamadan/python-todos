#!/bin/sh

echo "------------------- Install python packages -------------------"
apt-get -y install python3-pip
pip install pip psycopg2
pip install Flask
pip install sqlalchemy
pip install flask-sqlalchemy
pip install flask-migrate


