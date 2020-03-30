FROM node:10.19.0-slim as base

ENV PORT 8080
EXPOSE ${PORT}

# workdir
ARG WORKDIR_PATH=/usr/src/app
RUN mkdir -p ${WORKDIR_PATH}
WORKDIR ${WORKDIR_PATH}

COPY package.json .
RUN npm i --production

COPY . .

CMD ["npm", "start"]
