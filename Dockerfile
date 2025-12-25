FROM node:22

LABEL org.opencontainers.image.source="https://github.com/probablyjassin/probablyjassin.github.io"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx nuxt build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]