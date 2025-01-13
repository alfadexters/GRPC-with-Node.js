const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Cargar el archivo .proto
const PROTO_PATH = path.join(__dirname, 'calculator.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const calculatorProto = grpc.loadPackageDefinition(packageDefinition).Calculator;

// Implementar el servicio
function add(call, callback) {
  const { num1, num2 } = call.request;
  const result = num1 + num2;
  callback(null, { result });
}

// Iniciar el servidor
function main() {
  const server = new grpc.Server();
  server.addService(calculatorProto.service, { Add: add });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log('gRPC server running on port 50051');
    server.start();
  });
}

main();
