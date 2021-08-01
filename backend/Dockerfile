# Dockerfile for React client

#Build react client
FROM node:16-slim

# Working directory
WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

# Install dependencies
RUN yarn install

# Copy local files to app folder
COPY . .

EXPOSE 5000

CMD ["yarn", "start"]