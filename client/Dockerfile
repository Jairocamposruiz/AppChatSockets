FROM node:16

WORKDIR /app

COPY . /app

RUN npm install

ENV NEXT_PUBLIC_API_URL=https://www.chat.jcoder.es/api/v1

ENV NEXT_PUBLIC_SOCKET_URL=https://www.chat.jcoder.es

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


