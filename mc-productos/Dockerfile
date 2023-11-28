FROM maven:3.8.4-openjdk-17-slim as builder
WORKDIR /usr/src/app
COPY . /usr/src/app
ARG SERVER_PORT=${SERVER_PORT}
ARG mysql_username=${mysql_username}
ARG mysql_password=${mysql_password}
ARG mysql_database=${mysql_database}
ARG CONFIG_SERVER=${CONFIG_SERVER}
ARG IP_EUREKA=${IP_EUREKA}
RUN mvn package

FROM openjdk:17-alpine
COPY --from=builder /usr/src/app/target/*.jar /app.jar
EXPOSE 8084
ENTRYPOINT ["java"]
CMD ["-jar", "/app.jar"]
