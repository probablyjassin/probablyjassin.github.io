# Build stage
FROM node:20-slim as builder

WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

# Production stage
FROM node:20-slim

WORKDIR /app
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/package*.json ./

EXPOSE 3000
ENV NODE_ENV=production

CMD ["node", ".output/server/index.mjs"]
