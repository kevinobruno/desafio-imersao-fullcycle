# Base image
FROM node:14.15

# Working directory
WORKDIR /app

# Install dependencies
RUN yarn global add @nestjs/cli@8.0.0
RUN yarn global add @nestjs/schematics@8.0.0

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Copy source code
COPY . .
