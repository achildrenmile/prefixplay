# PrefixPlay - Development Notes

## Deployment

**To deploy changes to production (https://prefixplay.oeradio.at/):**

1. Commit and push changes to GitHub
2. SSH into Synology and run the deploy script:

```bash
ssh straliadmin@station.strali.solutions "cd /volume1/docker/prefixplay && git pull && ./deploy.sh"
```

For a full rebuild (no Docker cache):
```bash
ssh straliadmin@station.strali.solutions "cd /volume1/docker/prefixplay && git pull && ./deploy.sh --rebuild"
```

## Infrastructure

- **Synology Host:** straliadmin@station.strali.solutions
- **Remote Path:** /volume1/docker/prefixplay
- **Container Name:** prefixplay
- **Port:** 3402 (maps to container port 80)
- **Public URL:** https://prefixplay.oeradio.at/ (via Cloudflare tunnel)

## Project Structure

- Static files served by nginx:alpine container
- No build step needed - pure HTML/CSS/JS
- World map uses TopoJSON (world.json)
