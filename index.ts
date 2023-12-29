import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = app.listen(3001, () => {
    console.log("Server running on port 3001");
});

const socketIo = new Server(server, {
    cors: {
        origin: ["http://localhost:3000, https://realtime-db.vercel.app/"],
    },
});

socketIo.on("connection", (socket) => {
    socket.on("send-message", (message) => {
        socketIo.emit("receive-message", message);
    });
});
