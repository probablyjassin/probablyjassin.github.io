FROM node:18.14.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

VOLUME /app/content

EXPOSE 3000

RUN npm run build
CMD [ "npm", "run", "start" ]