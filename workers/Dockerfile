FROM node:10.19.0-slim as base

# workdir
ARG WORKDIR_PATH=/usr/src/app
RUN mkdir -p ${WORKDIR_PATH}
WORKDIR ${WORKDIR_PATH}
RUN mkdir -p ${WORKDIR_PATH}/workers
RUN mkdir -p ${WORKDIR_PATH}/server

COPY ./workers/package*.json ${WORKDIR_PATH}/
RUN npm i --production
COPY workers ./workers/
COPY server ./server/
CMD ["node", "workers"]
