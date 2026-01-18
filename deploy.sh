#!/bin/bash
# PrefixPlay Deployment Script
# Usage: ./deploy.sh [remote-host]

set -e

# Configuration
IMAGE_NAME="prefixplay"
CONTAINER_NAME="prefixplay"
REMOTE_PORT=8080

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== PrefixPlay Deployment ===${NC}"

# Check if deploying locally or to remote
if [ -n "$1" ]; then
    REMOTE_HOST="$1"
    echo -e "${YELLOW}Deploying to remote host: ${REMOTE_HOST}${NC}"

    # Build and save image locally
    echo -e "${GREEN}Building Docker image...${NC}"
    docker build -t ${IMAGE_NAME}:latest .

    # Save image to tar
    echo -e "${GREEN}Saving image to tar...${NC}"
    docker save ${IMAGE_NAME}:latest | gzip > /tmp/${IMAGE_NAME}.tar.gz

    # Copy to remote
    echo -e "${GREEN}Copying image to remote...${NC}"
    scp /tmp/${IMAGE_NAME}.tar.gz ${REMOTE_HOST}:/tmp/

    # Load and run on remote
    echo -e "${GREEN}Loading and starting container on remote...${NC}"
    ssh ${REMOTE_HOST} "
        docker load < /tmp/${IMAGE_NAME}.tar.gz && \
        docker stop ${CONTAINER_NAME} 2>/dev/null || true && \
        docker rm ${CONTAINER_NAME} 2>/dev/null || true && \
        docker run -d \
            --name ${CONTAINER_NAME} \
            --restart unless-stopped \
            -p ${REMOTE_PORT}:80 \
            ${IMAGE_NAME}:latest && \
        rm /tmp/${IMAGE_NAME}.tar.gz && \
        echo 'Container started successfully!'
    "

    # Cleanup local tar
    rm /tmp/${IMAGE_NAME}.tar.gz

    echo -e "${GREEN}=== Deployment to ${REMOTE_HOST} complete ===${NC}"
    echo -e "Access the app at: http://${REMOTE_HOST}:${REMOTE_PORT}"
else
    # Local deployment
    echo -e "${YELLOW}Deploying locally...${NC}"

    # Build image
    echo -e "${GREEN}Building Docker image...${NC}"
    docker build -t ${IMAGE_NAME}:latest .

    # Stop and remove existing container
    echo -e "${GREEN}Stopping existing container...${NC}"
    docker stop ${CONTAINER_NAME} 2>/dev/null || true
    docker rm ${CONTAINER_NAME} 2>/dev/null || true

    # Run new container
    echo -e "${GREEN}Starting new container...${NC}"
    docker run -d \
        --name ${CONTAINER_NAME} \
        --restart unless-stopped \
        -p ${REMOTE_PORT}:80 \
        ${IMAGE_NAME}:latest

    echo -e "${GREEN}=== Local deployment complete ===${NC}"
    echo -e "Access the app at: http://localhost:${REMOTE_PORT}"
fi
