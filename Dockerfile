# Stage 1: Build the application
FROM node:18 AS builder
WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Stage 2: Run the application
FROM node:18
WORKDIR /app

# Copy the built app from the builder stage
COPY --from=builder /app ./

# Set production environment
ENV NODE_ENV=production
ENV DATABASE_URL="postgresql://postgres:postgres@123@db:5432/restrurant_db"
EXPOSE 3000

# Apply Prisma migrations before starting the app
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
