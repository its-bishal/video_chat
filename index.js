const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");


const io = require("socket.io")(server,{
    cors:{
        origin:"*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send("server is running");
});

io.on('connection', (socket)=>{
    socket.emit('me', socket.id);

    socket.on('disconnect',() =>{
        socket.broadcast.emit('callEnded');
    });

    socket.on("calluser", ({userToCall, signalData, from, name}) => {
        io.to(userToCall).emit('callUser', {signnal: signalData, from, name});
    })

    socket.on("answercall", (data)=>{
        io.to(data.to).emit('callAccepted', data.signal);
    })
})


server.listen(PORT, ()=>console.log(`server listening on port ${PORT}`));