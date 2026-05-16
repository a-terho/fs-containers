FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

ENV PORT=3000

RUN npm install

CMD ["npm", "run", "dev"]