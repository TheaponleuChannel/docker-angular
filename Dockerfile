# Stage 1: Build the Angular application
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:alpine AS production
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/docker-angular/browser /usr/share/nginx/html
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
