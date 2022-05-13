FROM node:16

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

ENV PORT=4000

ENV CONNECTION_DB=mongoUrl

ENV SECRET_JWT=secret

EXPOSE 4000

CMD ["npm", "start"]
