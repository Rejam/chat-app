const socket = io()

const form = document.querySelector("form")
const msgInput = document.querySelector("#msg")
const msgList = document.querySelector("#messages")

form.addEventListener("submit", e => {
  e.preventDefault()
  const msg = msgInput.value.trim()
  if (!msg) return
  socket.emit("chat message", msg)
  msgInput.value = ""
})

socket.on("new message", msg => {
  const el = document.createElement("li")
  el.innerHTML = msg
  msgList.appendChild(el)
  el.scrollIntoView({ behaviour: "smooth" })
})
