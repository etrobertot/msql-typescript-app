FROM node:16
FROM mysql

RUN mkdir /app
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
RUN npm install -g typescript ts-node express nodemon
RUN npm i ts-node -D
RUN npm i @types/morgan -D
RUN npm i mysql2 
RUN npm i types/mysql2

EXPOSE 5000
CMD [ "npm", "run", "dev" ]