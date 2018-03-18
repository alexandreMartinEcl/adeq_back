const socketIo = require('socket.io');



const socketServer = {
    init: function(server){
        this.io = socketIo(server);
        this.disc_namespace = this.io.of('/discussions');
//        this.namespaces = {};
//        this.nsp = this.io.of('/test');
//        this.io.on('connection', (socket) => {
        this.disc_namespace.on('connection', (socket) => {
//        this.nsp.on('connection', (socket) => {
            console.log("New connection");

            socket.on('room', function(room_name){
                socket.join(room_name);
                console.log("New socket joined room " + room_name);
//                console.log(socket);
            });

            socket.on('disconnect', function(){
//                this.io.to('default').emit('users-changed', {user: socket.nickname, event: 'left'});
                console.log("Someone got disconnected");
                this.nsp.to('default').emit('users-changed', {user: socket.nickname, event: 'left'});                
            });
        });
    },
    emit: function (...args){
//        this.io.to('default').emit(...args);
//        this.nsp.to('default').emit(...args);
        this.disc_namespace.emit(...args);
},
    create_namespace: function(name){
        this.namespaces[name] = this.namespaces[name] || this.io.of('/' + name);
        let nsp = this.namespaces[name];
        nsp.name = name;
        nsp.nb_connections = nsp.nb_connections || 1;
        nsp.on('connection', function (socket) {
            console.log("Connection to namespace: " + this.name);
            console.log(this.nb_connections);
            this.nb_connections += 1;
        });

        nsp.on('disconnect', function () {
            console.log("Disconnection to namespace: " + this.name);
            this.nb_connections += -1;
            if(this.nb_connections == 0){
                console.log("No more connections in " + this.name);
            }
        })
    },
    emit_room: function(name, ...args){
        console.log("Emiting to: " + name);
        this.disc_namespace.in(name).emit(...args);
    }
}

module.exports = socketServer;
