# Use the latest LTS version of Node.js
FROM node:18-alpine AS build
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy the rest of your application files
COPY . .
 
# Install dependencies
RUN npm install
 
# Define the command to run your app
CMD ["npm", "start"]