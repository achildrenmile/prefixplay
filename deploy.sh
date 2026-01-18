#!/bin/bash
# PrefixPlay Deployment Script
# Usage: ./deploy.sh [remote-host]

set -e

# Configuration
IMAGE_NAME="prefixplay"
CONTAINER_NAME="prefixplay"
REMOTE_PORT=3402
REMOTE_PATH="/volume1/docker/prefixplay"

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

    # Pull latest changes and rebuild on remote using docker-compose
    echo -e "${GREEN}Pulling latest changes and rebuilding on remote...${NC}"
    ssh ${REMOTE_HOST} "
        export PATH=/usr/local/bin:\$PATH && \
        cd ${REMOTE_PATH} && \
        git pull && \
        docker-compose down && \
        docker-compose up -d --build && \
        echo 'Deployment complete!'
    "

    echo -e "${GREEN}=== Deployment to ${REMOTE_HOST} complete ===${NC}"
    echo -e "Access the app at: https://prefixplay.oeradio.at"
else
    # Local deployment
    echo -e "${YELLOW}Deploying locally...${NC}"

    # Build and run using docker-compose
    echo -e "${GREEN}Building and starting with docker-compose...${NC}"
    docker-compose down 2>/dev/null || true
    docker-compose up -d --build

    echo -e "${GREEN}=== Local deployment complete ===${NC}"
    echo -e "Access the app at: http://localhost:${REMOTE_PORT}"
fi
