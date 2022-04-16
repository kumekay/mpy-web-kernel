#!/usr/bin/env python

import asyncio
import websockets


async def reverse(websocket):
    async for code in websocket:
        print(f"< {code}")

        await websocket.send(code[::-1])


async def server():
    async with websockets.serve(reverse, "localhost", 8765):
        await asyncio.Future()


asyncio.run(server())
