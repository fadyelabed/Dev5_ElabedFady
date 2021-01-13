
FROM node:12.16-alpine3.10


# COPY [local] [VM]
COPY src /workdir/src

COPY package*.json /workdir/

WORKDIR /workdir

RUN npm install --quiet || cat npm-debug.log


ENV PORT=3001

EXPOSE 3001

CMD ["npm", "start"]