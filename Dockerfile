FROM node:22

LABEL org.opencontainers.image.source="https://github.com/probablyjassin/probablyjassin.github.io"

ARG STUDIO_GITHUB_CLIENT_ID
ARG STUDIO_GITHUB_CLIENT_SECRET

# Set them as ENV so the build process can see them
ENV STUDIO_GITHUB_CLIENT_ID=$STUDIO_GITHUB_CLIENT_ID
ENV STUDIO_GITHUB_CLIENT_SECRET=$STUDIO_GITHUB_CLIENT_SECRET

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx nuxt build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]