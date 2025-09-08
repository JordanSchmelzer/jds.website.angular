from contextlib import asynccontextmanager
from fastapi import FastAPI
from routers import contact, career, projects, pingpong
from services.db import create_db_and_tables


@asynccontextmanager
async def lifespan(app: FastAPI):
    """ 
    Single function controls the startup and shutdown behavior.
    Immediatly before requests are taken. After requests stop.
    Seperated by the yield in the function.
    """
    # Startup code that runs before api starts taknig requests
    print("Lifecylce startup code executing...")
    create_db_and_tables()
    print("Lifecycle startup code complete.")
    yield
    # Clean up code that runs at shutdown. 
    print("Lifecycle shutdown...")
    print("Lifecycle shutdown complete.")


app = FastAPI(lifespan=lifespan)


# Include Additional Routers
for router in [
    career.router,
    contact.router,
    projects.router,
    pingpong.router,
]:
    app.include_router(router)


@app.get("/")
async def root():
    return {
        "message": "Jordan Schmelzer Portfolio API",
        "version": "hero"
        }
