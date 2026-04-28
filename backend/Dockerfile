# Use the official Node.js Alpine image for a smaller footprint
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./

# Install dependencies (production only to keep image small)
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (defaults to 3000)
EXPOSE 3000

# Command to run the application in production
CMD ["npm", "run", "start:prod"]