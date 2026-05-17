FROM node:20-alpine AS client-builder

WORKDIR /app/client

COPY client/package*.json ./
RUN npm ci

COPY client/ ./
RUN npm run build

FROM node:20-alpine AS server-builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
COPY --from=client-builder /app/client/dist ./client/dist

EXPOSE 8080

ENV NODE_ENV=production
ENV PORT=8080

CMD ["node", "server.js"]