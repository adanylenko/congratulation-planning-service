echo "Start deploying to Docker..."
docker build -t congratulation-planning-service-backend .
docker run -p 3000:3000 -d congratulation-planning-service-backend