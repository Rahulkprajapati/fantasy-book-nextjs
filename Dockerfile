
# Dockerfile

# base image
FROM node:16-alpine AS builder

# create & set working directory
# RUN mkdir -p /app
WORKDIR /usr/src/

# copy source files
COPY . /usr/src/
# install dependencies
# ENV NODE_ENV development
RUN npm i

# start app
FROM node:16-alpine AS run
WORKDIR /usr/src/
COPY --from=builder /usr/src/ ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]