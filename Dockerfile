# Build stage
FROM node:22 AS builder

LABEL org.opencontainers.image.source="https://github.com/probablyjassin/probablyjassin.github.io"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx nuxt build

# Production stage
FROM node:22

WORKDIR /app
COPY --from=builder /app/. ./

EXPOSE 3000
ENV NODE_ENV=production

CMD ["node", ".output/server/index.mjs"]