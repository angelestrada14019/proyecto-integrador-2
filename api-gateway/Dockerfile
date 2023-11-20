FROM maven:3.8.4-openjdk-17-slim as builder
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN mvn package

FROM openjdk:17-alpine
COPY --from=builder /usr/src/app/target/*.jar /app.jar
EXPOSE 8080
ENTRYPOINT ["java"]
CMD ["-jar", "/app.jar"]