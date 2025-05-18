FROM node:20 AS build

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/
ARG BASE_URL
ARG MODE
ARG BOTNAME
ARG WEBAPPNAME
#ARG SUPPORT_USERNAME

RUN yarn build

#FROM nginx:alpine AS web
WORKDIR /app

#COPY --from=build /app/build ./
#COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD ["yarn", "start"]
