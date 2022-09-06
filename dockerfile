FROM node:16-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
RUN npm run start
