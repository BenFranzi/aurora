# Set to the latest LTS Node
FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install dependancies from project package
COPY package*.json ./

RUN npm install

#for production
# RUN npm install --only=production

COPY . .

EXPOSE 8080
CMD ["npm", "start"]