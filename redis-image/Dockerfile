#Base image
FROM alpine
#Download and Install dependencies
RUN apk add --update redis
#Installing a second deps
RUN apk add --update gcc
#Tell image what to do when it starts
#as container
CMD ["redis-server"]
