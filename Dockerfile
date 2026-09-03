FROM python:3.12-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY backend/ .

# Expose port
ENV PORT=5001
EXPOSE 5001

# Start the app
CMD ["sh", "-c", "uvicorn run:app --host 0.0.0.0 --port ${PORT:-5001}"]
