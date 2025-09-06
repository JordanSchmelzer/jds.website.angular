import asyncio
from pycomm3 import 

class PLC:
    def __init__(self):
        self.tags = {}
        
    async def poll_tags(self):
        # Simulate tag changes
        
        while True:
            ...