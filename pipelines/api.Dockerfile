FROM node:24

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY app.js ./

EXPOSE 3000

CMD ["node", "app.js"]