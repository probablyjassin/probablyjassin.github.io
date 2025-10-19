# Build stage
FROM node:22-slim AS builder

LABEL org.opencontainers.image.source="https://github.com/probablyjassin/probablyjassin.github.io"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:22-slim

WORKDIR /app
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/package*.json ./

EXPOSE 3000
ENV NODE_ENV=production

CMD ["node", ".output/server/index.mjs"]