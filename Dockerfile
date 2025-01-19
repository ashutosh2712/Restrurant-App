FROM node:18-alpine AS builder
WORKDIR /app

# Install OpenSSL and other dependencies
RUN apk add --no-cache openssl

# Set a non-root user and ensure /app is writable
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Install application dependencies
COPY package.json package-lock.json ./
RUN npm install

RUN chown -R appuser:appgroup /app
USER appuser

# Copy application code
COPY . .

RUN chown -R appuser:appgroup /app

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN npm run build

FROM node:18-alpine AS production
WORKDIR /app

# Install runtime dependencies
RUN apk add --no-cache openssl

# Set a non-root user and ensure /app is writable
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy built application
COPY --from=builder /app ./

RUN chown -R appuser:appgroup /app
USER appuser
# Expose the application port

EXPOSE 3000 5555

# Apply Prisma migrations
CMD ["npm", "run",  "start:migrate:prod"]
