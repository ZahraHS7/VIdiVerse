FROM node:18.16.0-alpine3.18

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app

WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .

EXPOSE 3001

CMD ["npm", "start"]