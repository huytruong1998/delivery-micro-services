from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_users():
    return {"message": "Users route is working!"}