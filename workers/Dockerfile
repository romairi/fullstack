FROM node:10.19.0-slim as build

# workdir
ARG WORKDIR_PATH=/usr/src/app
RUN mkdir -p ${WORKDIR_PATH}
WORKDIR ${WORKDIR_PATH}
RUN mkdir -p ${WORKDIR_PATH}/workers
RUN mkdir -p ${WORKDIR_PATH}/server

COPY ./workers/package*.json ${WORKDIR_PATH}/workers/
RUN npm i --prefix ${WORKDIR_PATH}/workers
COPY workers ./workers/
COPY server ./server/
RUN npm run build --prefix ${WORKDIR_PATH}/workers


FROM node:10.19.0-slim as base

# workdir
ARG WORKDIR_PATH=/usr/src/app
RUN mkdir -p ${WORKDIR_PATH}
WORKDIR ${WORKDIR_PATH}
RUN mkdir -p ${WORKDIR_PATH}/workers/build
RUN mkdir -p ${WORKDIR_PATH}/server

COPY ./workers/package*.json ${WORKDIR_PATH}/
RUN npm i --production
COPY --from=build ${WORKDIR_PATH}/workers/build ${WORKDIR_PATH}/workers/build
COPY workers ./workers/
COPY server ./server/
CMD ["node", "workers/build"]
