from fastapi import APIRouter
from services.db import SessionDependency


router = APIRouter(prefix="/contact", tags=["contact"])


@router.get("/")
async def get_jobs():
    return {"data": "job data"}


@router.post("/")
async def form_submit():
    return {"message": "Experince Created"}
