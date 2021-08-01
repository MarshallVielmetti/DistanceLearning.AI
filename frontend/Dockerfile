# Dockerfile for React client

#Build react client
FROM node:current-alpine3.11

# Working directory
WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy local files to app foloder
COPY . .

EXPOSE 3000

CMD ["yarn", "start"]