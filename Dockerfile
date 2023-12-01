FROM node:20-alpine3.18

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm i -g pnpm
RUN pnpm install

COPY . .

CMD ["pnpm", "start:prod"]