# Dockerfile for React client

#Build react client
FROM node:current-alpine3.11

# Create App Direcotry
RUN mkdir -p /use/src/app
WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy local files to app foloder
COPY . .

EXPOSE 5000

CMD ["yarn", "start"]