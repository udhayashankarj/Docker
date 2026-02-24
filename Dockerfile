# Base image
FROM node:lts-alpine

# Working directory
WORKDIR /app

# Copying all files from current directory to app directory
COPY . .

# (Build time) Installing packages from package.json inside app directory
RUN npm install

# Exposing Port 3000 to access application
EXPOSE 3000

# (Run-time) Default command to execute in starting of container
CMD ["npm","run","dev"]