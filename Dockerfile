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
EXPOSE 3000 5555

# Apply Prisma migrations
CMD ["npm", "run",  "start:migrate:prod"]
