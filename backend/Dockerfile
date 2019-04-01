FROM node:8

WORKDIR /usr/src/app

ENV PORT 3000
EXPOSE 3000

COPY . .
RUN npm install
RUN npm run build


CMD [ "node", "./build/index.js" ]