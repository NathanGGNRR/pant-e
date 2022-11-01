FROM node:14.18.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build Nuxt app
RUN npm run build

# Set environment variables
ENV NODE_ENV=production
# otherwise the app is unavailable to the host running Docker
ENV HOST=0.0.0.0
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80
# Expose the app's port
EXPOSE 80

CMD [ "npm", "run", "start" ]
