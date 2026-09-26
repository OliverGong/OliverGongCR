FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /src
COPY pom.xml ./
COPY config config
COPY apps/ai-worker apps/ai-worker
COPY apps/server/pom.xml apps/server/pom.xml
RUN mvn -pl apps/ai-worker -am package -DskipTests
FROM eclipse-temurin:21-jre-alpine
COPY --from=build /src/apps/ai-worker/target/ai-worker-*.jar /app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
