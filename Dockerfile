FROM node:18.20.8-slim
# Menambah Folder
WORKDIR /app
COPY . /app/
RUN npm install
# Menunjukan port di 3000
EXPOSE 3000
CMD ["npm","start"]
#------ TEST ---------
    