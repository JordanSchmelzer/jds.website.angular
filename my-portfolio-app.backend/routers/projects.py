from fastapi import APIRouter
from services.db import SessionDependency


router = APIRouter(prefix="/projects", tags=["project"])


@router.get("/card/{idx}")
async def get_project():
    return {"data": "job data"}


@router.post("/card")
async def post_project():
    return {"message": "Experince Created"}
