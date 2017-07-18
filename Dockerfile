FROM ubuntu:14.04
#RUN echo $FFMPEG_PATH
#RUN whereis ffmpeg
FROM node:boron
FROM dkarchmervue/fluent-ffmpeg
# Create the MongoDB data directory
RUN mkdir -p /data/db
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
# Bundle app source
COPY . /usr/src/app
EXPOSE 8080
CMD [ "npm", "start" ]
