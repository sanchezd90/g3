# Define node version
FROM node:12.20-alpine
# Define container directory
WORKDIR /usr/src/app
# Copy package*.json for npm install
COPY package*.json ./
# Run npm clean install, prod dependencies only
RUN npm ci --only=production
# Copy all files
COPY . .
# Expose port 4000 for server
EXPOSE 4000
CMD ["node","index.js"]