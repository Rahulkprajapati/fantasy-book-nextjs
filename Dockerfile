
# Dockerfile

# base image
FROM node:16.19.1-alpine 

# create & set working directory
# RUN mkdir -p /app
WORKDIR /usr/src/

# copy source files
COPY . /usr/src/
# install dependencies
# ENV NODE_ENV development
RUN npm i

# start app
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]