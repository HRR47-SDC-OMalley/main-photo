FROM node:current
WORKDIR /main-photo
COPY package*.json ./
RUN npm install
EXPOSE 3001
COPY . .
RUN npm run build
CMD ["npm", "start"]