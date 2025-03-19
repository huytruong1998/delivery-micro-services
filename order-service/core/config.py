from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Order Service"
    DATABASE_URL: str = "postgresql://fastapi_user:fastapi_password@localhost:5432/fastapi_db"

    class Config:
        env_file = ".env"  # Load environment variables from a .env file

settings = Settings()