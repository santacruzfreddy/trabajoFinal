# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set environment variables
ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=5173

# Expose the port that the application will run on
EXPOSE 5173

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "run", "serve"]
