from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends
from typing import Annotated
import asyncio
from services.portfolio_experience_service import ExperienceService
from routers import experience


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup code that runs before api starts taknig requests
    print("Lifecylce startup ...")
    #asyncio.create_task(monitor_plc)
    ...
    print("Lifecycle startup complete.")
    yield
    # Clean up code that runs at shutdown. 
    print("Lifecycle shutdown...")
    ...
    print("Lifecycle shutdown complete.")


app = FastAPI(lifespan=lifespan)

# Include Routers
app.include_router(experience.router)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/ping")
async def pingpong():
    return {"pong"}

