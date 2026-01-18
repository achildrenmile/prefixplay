# PrefixPlay - Ham Radio Prefix Learning Game
# Simple nginx container for static files (no build step needed)

FROM nginx:alpine

# Copy static files
COPY index.html favicon.svg /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/

# Nginx configuration with caching and compression
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # HTML: no cache for updates \
    location = / { \
        add_header Cache-Control "no-cache, no-store, must-revalidate"; \
        try_files /index.html =404; \
    } \
    location ~* \.html$ { \
        add_header Cache-Control "no-cache, no-store, must-revalidate"; \
    } \
    \
    # JavaScript and CSS: cache for 7 days \
    location ~* \.(js|css)$ { \
        expires 7d; \
        add_header Cache-Control "public"; \
    } \
    \
    # Other static files \
    location ~* \.(json|svg|png|jpg|ico)$ { \
        expires 7d; \
        add_header Cache-Control "public"; \
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
