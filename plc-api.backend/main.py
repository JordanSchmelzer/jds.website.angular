from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import asyncio
from plc import PLC
from websocket_manager import WebSocketManager
from contextlib import asynccontextmanager

app = FastAPI()
plc = PLC()
ws_manager = WebSocketManager()

previous_state = {}


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup code that runs before api starts taknig requests
    #asyncio.create_task()
    ...
    yield
    # Clean up code that runs at shutdown. 
    ...


@app.on_event("startup")
async def startup_event():
    asyncio.create_task(monitor_plc())

async def monitor_plc():
    global previous_state
    await plc.poll_tags()  # Start tag simulation loop

    while True:
        current_state = plc.get_tags()
        if current_state != previous_state:
            await ws_manager.broadcast(current_state)
            previous_state = current_state
        await asyncio.sleep(1)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await ws_manager.connect(websocket)
    try:
        while True:
            await websocket.receive_text()  # Keep connection alive
    except WebSocketDisconnect:
        ws_manager.disconnect(websocket)
