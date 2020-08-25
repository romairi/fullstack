FROM node:10.19.0-slim as base

# workdir
ARG WORKDIR_PATH=/usr/src/app
RUN mkdir -p ${WORKDIR_PATH}
WORKDIR ${WORKDIR_PATH}

COPY package.json .
RUN npm i --production
COPY . .
CMD ["node", "workers"]
