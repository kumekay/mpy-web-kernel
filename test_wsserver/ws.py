#!/usr/bin/env python

import asyncio
import websockets
import json


async def reverse(websocket):
    async for message in websocket:
        data = json.loads(message)
        print(f"< {data}")
        data["result"] = data.pop("code", "")[::-1]

        await websocket.send(json.dumps(data))


async def server():
    async with websockets.serve(reverse, "localhost", 8765):
        await asyncio.Future()


asyncio.run(server())
