FROM node:12.19.0-alpine as build
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/local/app
COPY package.json yarn.lock ./

RUN NODE_ENV=development yarn install
RUN yarn add @swc/core-linux-musl

COPY . ./

RUN yarn compile
RUN if [ "${NODE_ENV}" = "production" ]; then yarn --prod; fi

FROM node:12.19.0-alpine
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY --from=build /usr/local/app /usr/local/app

WORKDIR /usr/local/app
CMD [ "yarn", "start" ]
