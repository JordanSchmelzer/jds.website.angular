from fastapi import APIRouter
from services import pingpong
from services.db import SessionDependency


router = APIRouter(prefix="/pingpong", tags=["games"])


@router.get("/ping/increment")
async def increment_counter(session: SessionDependency):
    counter_row = pingpong.increment_counter(session)
    return {"pong": counter_row}
