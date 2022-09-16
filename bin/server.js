const http = require('http');
const debug = require('debug')('pfc:server');
const cors = require('cors');
const corsOptions ={
    origin:'http://0.0.0.0:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = require('../src/app');
const port = normalizePort(process.env.PORT || '3000');;
app.set('port', port);
app.set('')
app.use(cors());
//app.use(cors())

const server = http.createServer(app);

server.listen(port, '192.168.5.102');
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta: ' + port);

function normalizePort(val){
  const port = parseInt(val, 10);
  if(isNaN(port)){
      return val;
  }
  if(port >= 0){
      return port;
  }
  return false;
}

function onError(error){
  if(error.syscall !== 'listen'){
      throw error;
  }
  
  const bind = typeof port === 'string' ?
      'Pipe ' + port :
      'Port ' + port;
  
      switch(error.code){
          case 'EACCES':
              console.error(bind + ' requires elevated privileges');
              process.exit(1);
          case 'EADDRINUSE':
              console.error(bind + ' is already in use');
              process.exit(1);
          default:
              throw error;
      }
}

function onListening(){
  const addr = server.address;
  const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

//_____________________________//







