FROM node:14.17-alpine
COPY index.js .
COPY package.json .
RUN apk add curl
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]