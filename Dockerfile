FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
RUN --mount=type=cache,target=/root/.npm npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]