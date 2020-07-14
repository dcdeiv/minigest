FROM python:3.8-alpine

ARG network="host"
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV ROOT /var/www/minigest

# Installa le dipendenze di cairo
RUN apk --update --upgrade \
  add gcc musl-dev \
  jpeg-dev zlib-dev libffi-dev \
  cairo-dev pango-dev gdk-pixbuf-dev \
  postgresql-dev gcc python3-dev musl-dev \
  font-noto

# MINIGEST
WORKDIR ${ROOT}

# Installa le dipendenze del progetto
RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copia minigest
COPY minigest ./minigest
COPY webapp ./webapp
COPY manage.py ./manage.py

# Cancella la cache python copiata dal repo
RUN find . | grep -E "(__pycache__|\.pyc|\.pyo$)" | xargs rm -rf

# Collectstatic
RUN mkdir public
RUN python manage.py collectstatic --no-input

EXPOSE 8000