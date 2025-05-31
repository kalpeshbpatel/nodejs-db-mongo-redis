# Node.js MongoDB Redis Stack

This repository contains Docker Compose configuration for setting up a development environment with MongoDB and Redis services for the Scarfall application.

## Services

### MongoDB

- **Version**: Latest
- **Port**: 27017
- **Hostname**: mongodb.scarfall.local
- **Credentials**:
  - Root User: `root`
  - Root Password: `scarfall`
  - Application User: `scarfall`
  - Application Password: `mongopass6001`
- **Database**: `scarfall-2`
- **Collections**:
  - users
  - tokens
  - games
  - sessions

### Redis

- **Version**: Alpine (Latest)
- **Port**: 6379
- **Hostname**: redis.scarfall.local
- **Password**: `scarfall@redis`

## Prerequisites

- Docker
- Docker Compose
- A Docker network named `scarefall` (must be created externally)

## Getting Started

1. Create the required Docker network:

   ```bash
   docker network create scarefall
   ```

2. Start the services:

   ```bash
   docker-compose up -d
   ```

3. Verify the services are running:
   ```bash
   docker-compose ps
   ```

## Connection Details

### MongoDB

- Connection String: `mongodb://scarfall:mongopass6001@mongodb.scarfall.local:27017/scarfall-2`
- Admin Connection: `mongodb://root:scarfall@mongodb.scarfall.local:27017/admin`

### Redis

- Connection String: `redis://:scarfall@redis@redis.scarfall.local:6379`

## Data Persistence

Both MongoDB and Redis data are persisted using Docker volumes:

- MongoDB data: `mongodb_data`
- Redis data: `redis_data`

## Network

All services are connected to the `scarefall` Docker network, allowing for service discovery and internal communication.

## Initialization

The MongoDB instance is automatically initialized with:

- A root user
- An application-specific user with appropriate permissions
- Required collections for the application

## Security Notes

- The credentials in this setup are for development purposes only
- For production deployment, please ensure to:
  - Use strong passwords
  - Enable authentication
  - Configure proper network security
  - Use environment variables for sensitive data
