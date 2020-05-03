FROM node:alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src
 
COPY package.json /usr/src/
COPY package-lock.json /usr/src/

COPY . /usr/src/

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]
