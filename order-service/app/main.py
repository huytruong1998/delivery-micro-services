from fastapi import FastAPI
from app.api.routes import orders, users
from core.config import settings

app = FastAPI(title=settings.PROJECT_NAME)

# Include routers
app.include_router(orders.router, prefix="/orders", tags=["Orders"])
app.include_router(users.router, prefix="/users", tags=["Users"])

@app.get("/")
async def root():
    return {"message": "Order Service is Running!"}