FROM node

WORKDIR /app/customer

COPY package.json .

RUN npm install

COPY . .

EXPOSE 7500

CMD [ "npm","start" ]