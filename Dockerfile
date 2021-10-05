# Use the lts-alpine image digest as per dockers suggestions for a deterministic build
FROM node@sha256:8c94a0291133e16b92be5c667e0bc35930940dfa7be544fb142e25f8e4510a45

LABEL version="1.0"
LABEL description="Base docker image for the Youtube Comments Analyser UI"
LABEL maintainer="luketparsons@gmail.com"

ENV NODE_ENV development
WORKDIR /app

# Change owner to node user when copying files over
COPY --chown=node:node ["package.json", "yarn.lock", "./"]

# --frozen-lockfile works same as `npm ci` whereby it
#   - Doesn't generate yarn.lock
#   - Fails if update is needed
# RUN yarn install --production --frozen-lockfile
RUN yarn install

COPY --chown=node:node . . 
# Need to do this otherwise it complains about not having permissions for node user
RUN chown -R node:node .

EXPOSE 3000

USER node

CMD ["yarn", "start"]
