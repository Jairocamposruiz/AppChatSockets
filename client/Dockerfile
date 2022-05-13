FROM node:16

WORKDIR /app

COPY . /app

RUN npm install

ENV NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1

ENV NEXT_PUBLIC_SOCKET_URL=http://localhost:4000

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


