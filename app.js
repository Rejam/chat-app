const express = require("express")

// APP SETUP
const app = express()
app.use(express.static("public"))

// SERVER
const PORT = "3000"
const server = app.listen(PORT, () =>
  console.log(`Chat app listening on port ${PORT}`)
)

// SOCKET.IO
const io = require("socket.io")(server)
io.on("connection", socket => {
  console.log("Connected:")

  // Disconnect
  socket.on("disconnect", function() {
    console.log("user disconnected")
  })

  // New message
  socket.on("chat message", function(msg) {
    io.emit("new message", msg)
  })
})
