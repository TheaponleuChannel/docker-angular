# 🚀 Dockerized Angular 18 Application

A modern Angular 18 project with Docker support, TailwindCSS, and Angular Material pre-configured.

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Angular](https://angular.dev/) | 18 | Frontend Framework (Standalone Components, SPA) |
| [TailwindCSS](https://tailwindcss.com/) | v3 | Utility-first CSS Framework |
| [Angular Material](https://material.angular.io/) | 18 | Material Design UI Components |
| [Node.js](https://nodejs.org/) | 20 Alpine | Docker Runtime |
| [Nginx](https://nginx.org/) | Alpine | Production Web Server |

---

## ✅ Prerequisites

Ensure you have the following installed:

- **Node.js** v20+ ([Download](https://nodejs.org/))
- **npm** v10+ (comes with Node.js)
- **Docker Desktop** ([Download](https://www.docker.com/products/docker-desktop/))

---

## 🏃 Quick Start

### Option 1: Local Development (NPM)

```bash
# Install dependencies
npm install

# Start development server
npm start
```

✨ Open [http://localhost:4200](http://localhost:4200) — auto-reload enabled!

---

### Option 2: Docker Development (Recommended)

```bash
# Build & start container with hot-reload
docker compose up --build
```

✨ Open [http://localhost:4200](http://localhost:4200) — changes auto-refresh!

**Stop the container:**
```bash
docker compose down
```

---

## 📝 Available Commands

### Development

| Command | Purpose |
|---------|---------|
| `npm start` | Run dev server on `localhost:4200` |
| `npm run build` | Build for production (`dist/` folder) |
| `npm test` | Run unit tests (Karma + Jasmine) |
| `docker compose up --build` | Run in Docker with hot-reload |

### Docker

| Command | Purpose |
|---------|---------|
| `docker compose up --build` | Build image & start container |
| `docker compose down` | Stop & remove container |
| `docker build -t docker-angular:prod .` | Manual production build |

---

## 🐳 Docker Features

### Development Setup (`Dockerfile.dev`)
- ✅ **Hot Reload**: Files sync via volume mount
- ✅ **Polling**: `CHOKIDAR_USEPOLLING=true` for file detection
- ✅ **Host Access**: `--disable-host-check` allows browser connections
- ✅ Port mapping: `4200:4200`

### Production Setup (`Dockerfile`)
- 🔨 Multi-stage build (Node + Nginx)
- 📦 Optimized image size
- ⚡ Static hosting via Nginx

---

## 🔧 Troubleshooting

### UI not refreshing when code changes?
1. Ensure `docker-compose.yml` has correct port: `4200:4200`
2. Check `CHOKIDAR_USEPOLLING=true` is set in environment
3. Rebuild with: `docker compose up --build`

### Container won't start?
```bash
# Check logs
docker logs docker-angular-app

# Remove & rebuild
docker compose down
docker compose up --build
```

### Port 4200 already in use?
```bash
# Change port in docker-compose.yml
ports:
  - "3000:4200"  # Access on http://localhost:3000
```

---
