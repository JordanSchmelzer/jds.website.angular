from fastapi import APIRouter


router = APIRouter(prefix="/experience", tags=["Experience"])


@router.get("/experience")
async def get_experience():
    return {"data": "Experience data"}


@router.post("/experience")
async def post_expereince():
    return {"message": "Experince Created"}



