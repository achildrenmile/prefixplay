#!/bin/bash

# PrefixPlay Deployment Script
# Runs locally, deploys to Synology via SSH

set -e

# Configuration
SYNOLOGY_HOST="straliadmin@station.strali.solutions"
REMOTE_DIR="/volume1/docker/prefixplay"
CONTAINER_NAME="prefixplay"
IMAGE_NAME="prefixplay:latest"
PORT="3402:80"
SITE_URL="https://prefixplay.oeradio.at/"

echo "=========================================="
echo "PrefixPlay Deployment"
echo "=========================================="

# Step 1: Git pull on Synology
echo ""
echo "[1/3] Pulling latest changes on Synology..."
ssh $SYNOLOGY_HOST "cd $REMOTE_DIR && git pull"

# Step 2: Build Docker image on Synology
echo ""
echo "[2/3] Building Docker image..."
ssh $SYNOLOGY_HOST "/usr/local/bin/docker build --no-cache -t $IMAGE_NAME $REMOTE_DIR"

# Step 3: Restart container
echo ""
echo "[3/3] Restarting container..."
ssh $SYNOLOGY_HOST "/usr/local/bin/docker stop $CONTAINER_NAME 2>/dev/null || true"
ssh $SYNOLOGY_HOST "/usr/local/bin/docker rm $CONTAINER_NAME 2>/dev/null || true"
ssh $SYNOLOGY_HOST "/usr/local/bin/docker run -d --name $CONTAINER_NAME --restart unless-stopped -p $PORT $IMAGE_NAME"

# Verify
echo ""
echo "[Verify] Checking deployment..."
sleep 3
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$SITE_URL" 2>/dev/null || echo "000")

if [ "$HTTP_CODE" = "200" ]; then
  echo ""
  echo "=========================================="
  echo "Deployment successful!"
  echo "$SITE_URL is responding (HTTP $HTTP_CODE)"
  echo "=========================================="
else
  echo "WARNING: Site returned HTTP $HTTP_CODE"
  echo "Check logs: ssh $SYNOLOGY_HOST '/usr/local/bin/docker logs $CONTAINER_NAME'"
fi
