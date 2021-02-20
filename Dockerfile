FROM node

RUN mkdir /app
WORKDIR /app

ADD package.json package-lock.json /app/
RUN npm install

COPY . /app/

CMD ["./run.sh"]