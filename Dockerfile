FROM node:8.9.1-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn --proxy $http_proxy --https-proxy $https_proxy install

COPY . /usr/src/app

ENTRYPOINT [ "yarn" ]
CMD [ "smoke" ]
