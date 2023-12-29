import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = app.listen(3001, () => {
    console.log("Server running on port 3001");
});

const socketIo = new Server(server, {
    cors: {
        origin: ["*"],
        methods: ["GET", "POST"],
    },
});

socketIo.on("connection", (socket) => {
    socket.on("send-message", (message) => {
        console.log(message);
        socketIo.emit("receive-message", message);
    });
});
