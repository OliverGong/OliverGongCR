FROM node:22-alpine AS build
WORKDIR /repo
RUN corepack enable
COPY package.json pnpm-workspace.yaml ./
COPY apps/export-worker/package.json apps/export-worker/package.json
RUN pnpm install --filter @resume-studio/export-worker...
COPY apps/export-worker apps/export-worker
RUN pnpm --filter @resume-studio/export-worker build
FROM node:22-alpine
WORKDIR /app
COPY --from=build /repo/apps/export-worker/dist ./dist
CMD ["node","dist/index.js"]
