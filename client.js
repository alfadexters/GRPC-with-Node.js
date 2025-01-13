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

// Crear un cliente
function main() {
  const client = new calculatorProto('localhost:50051', grpc.credentials.createInsecure());

  // Realizar la solicitud
  client.Add({ num1: 5.5, num2: 4.5 }, (error, response) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Sum result:', response.result);
    }
  });
}

main();
