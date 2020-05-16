FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8000
CMD [ "http-server", "dist" ]