FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /src
COPY pom.xml ./
COPY config config
COPY apps/server apps/server
COPY apps/ai-worker/pom.xml apps/ai-worker/pom.xml
RUN mvn -pl apps/server -am package -DskipTests
FROM eclipse-temurin:21-jre-alpine
COPY --from=build /src/apps/server/target/server-*.jar /app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
