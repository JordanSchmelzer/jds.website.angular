from fastapi import APIRouter
from services.db import SessionDependency


router = APIRouter(prefix="/career", tags=["career"])


@router.get("/jobs")
async def get_jobs():
    return {"data": "job data"}


@router.post("/jobs/new")
async def post_expereince():
    return {"message": "Experince Created"}
