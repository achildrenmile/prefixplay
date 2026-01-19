# PrefixPlay - Ham Radio Prefix Learning Game
# Simple nginx container for static files (no build step needed)

FROM nginx:alpine

# Copy static files
COPY index.html dxcc-list.html favicon.svg countries.json austria-states.json /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/

# Nginx configuration - no caching for development
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # Disable caching for all files \
    add_header Cache-Control "no-cache, no-store, must-revalidate" always; \
    add_header Pragma "no-cache" always; \
    add_header Expires "0" always; \
    \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    \
    # Gzip compression \
    gzip on; \
    gzip_vary on; \
    gzip_min_length 1000; \
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml; \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
