# TO STATIC PAGE
FROM node:20 as builder

# Creating and assigment to the WORKDIR folder
WORKDIR /app

# Copying project and saving it in [/app]
COPY . .

# Installing depedencies
RUN npm install
RUN npm run build

# --------------------------------------------------------------------------

# ADD NGINX
FROM nginx:alpine

# Copying static app it in [/usr/share/nginx/html]
COPY --from=builder /app/dist/app/browser /usr/share/nginx/html

# Adding nginx.conf it in [/etc/nginx/nginx.conf]
COPY nginx.conf /etc/nginx/nginx.conf
# Adding mime.types it in [/etc/nginx/mime.types]
COPY mime.types /etc/nginx/mime.types

# To expose port 80
EXPOSE 80

# Starting the application execution
CMD ["nginx", "-g", "daemon off;"]



# RUN:
  ## BUILD IMAGE: `docker build -t magic-packs-static-frontend-docker .`

  ## RUN IMAGE: `docker run -p 80:80 magic-packs-static-frontend-docker`


