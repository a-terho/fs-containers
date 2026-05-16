FROM node:24 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm test -- --reporter=junit --outputFile=test-results.xml

FROM node:24 AS build-stage

WORKDIR /usr/src/app

COPY --from=test-stage /usr/src/app/test-results.xml ./test-results.xml

COPY . .

ENV VITE_BACKEND_URL=http://localhost:8080/api

RUN npm ci

RUN npm run build

FROM nginx:1.31-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html