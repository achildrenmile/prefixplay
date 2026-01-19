#!/bin/bash

# PrefixPlay Deployment Script
# Run this script ON the Synology: ./deploy.sh [--rebuild]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

CONTAINER_NAME="prefixplay"
IMAGE_NAME="prefixplay:latest"
PORT="3402:80"

# Check for --rebuild flag
BUILD_FLAGS=""
if [ "$1" = "--rebuild" ]; then
  BUILD_FLAGS="--no-cache"
  echo "Rebuild mode: Docker cache will be ignored"
fi

echo "=========================================="
echo "PrefixPlay Deployment"
echo "=========================================="

echo ""
echo "[1/3] Pulling latest changes..."
git pull

echo ""
echo "[2/3] Building Docker image..."
/usr/local/bin/docker build $BUILD_FLAGS -t $IMAGE_NAME .

echo ""
echo "[3/3] Restarting container..."
/usr/local/bin/docker stop $CONTAINER_NAME 2>/dev/null || true
/usr/local/bin/docker rm $CONTAINER_NAME 2>/dev/null || true
/usr/local/bin/docker run -d --name $CONTAINER_NAME --restart unless-stopped -p $PORT $IMAGE_NAME

echo ""
echo "=========================================="
echo "Deployment complete!"
echo "=========================================="
