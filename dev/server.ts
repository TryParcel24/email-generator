import connect from "connect"
import servStatic from "serve-static"
const server = connect()

server.use(servStatic(__dirname + "/public"))

server.listen(3000)

const livereload = require("livereload")
const lrServer = livereload.createServer()
lrServer.watch(__dirname + "/public")
