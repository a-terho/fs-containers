FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

ENV PORT=3000

RUN npm ci --omit=dev

USER node

CMD ["npm", "start"]