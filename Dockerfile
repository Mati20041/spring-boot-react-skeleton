FROM openjdk:11-jre
WORKDIR /workspace
COPY backend/build/libs/backend*.jar backend.jar

CMD ["java", "-jar", "backend.jar"]