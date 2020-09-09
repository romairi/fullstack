FROM node:10.19.0-slim as bundles
# workdir
ARG WORKDIR_PATH=/usr/src/app
RUN mkdir -p ${WORKDIR_PATH}
WORKDIR ${WORKDIR_PATH}

COPY ./client/package*.json ${WORKDIR_PATH}/
RUN npm i
COPY client .
RUN npm run build

FROM node:10.19.0-slim as base

ENV PORT 8080
EXPOSE ${PORT}

# workdir
ARG WORKDIR_PATH=/usr/src/app
RUN mkdir -p ${WORKDIR_PATH}
WORKDIR ${WORKDIR_PATH}
RUN mkdir -p ${WORKDIR_PATH}/client/build
COPY --from=bundles ${WORKDIR_PATH}/build ${WORKDIR_PATH}/client/build

COPY package.json .
RUN npm i --production

COPY index.js index.js
COPY ecosystem.config.js ecosystem.config.js
COPY server server

# TODO use pm2 directlly
CMD ["npm", "start"]
