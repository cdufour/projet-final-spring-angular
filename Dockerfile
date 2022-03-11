FROM openjdk:12-alpine
ARG JAR_FILE=target/app-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]