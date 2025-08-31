import http from 'http';

const port = 8080; 
const server = http.createServer(

    // Dentro trabajar con objetos manejados por callbacks
    (request, response) =>{
        response.end ("Mi segundo server activo")
    }


)

server.listen(port , ()=>{
    console.log(`escuchando puerto: ${port}`);
})