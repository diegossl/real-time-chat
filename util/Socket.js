"use strict";

module.exports = (io) => {
  var clients = {};
  io.on("connection", function (client) {
    client.on("join", function (name) {
      console.log("Joined: " + name);
      clients[client.id] = name;
      client.emit("update", "Você se conectou ao servidor");
      client.broadcast.emit("update", name + " Entrou no servidor");
    });

    client.on("send", function (msg) {
      console.log("Message: " + msg);
      client.broadcast.emit("chat", clients[client.id], msg);
    });

    client.on("disconnect", function () {
      console.log("Disconnect");
      io.emit("update", clients[client.id] + "Você deixou o servidor");
      delete clients[client.id];
    });
  });
};
