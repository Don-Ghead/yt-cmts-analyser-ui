FROM node:12.22.3

LABEL version="1.0"
LABEL description="Base docker image for the Youtube Comments Analyser UI"
LABEL maintainer="luketparsons@gmail.com"

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

# # Copy all working dir files to working dir of docker container
COPY . . 

EXPOSE 3000

CMD ["yarn", "start"]