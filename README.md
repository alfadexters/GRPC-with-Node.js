# GRPC-with-Node.js

This project is a basic implementation of a gRPC service with Node.js that performs mathematical operations (adding two numbers).

## 📋 Description

The project uses **gRPC** to create a server and a client that communicate using a binary protocol. The gRPC service implemented here performs a simple operation: adding two numbers (`Add`).

The project includes:

- Service definition using **Protocol Buffers (Proto3)**.
- gRPC server to handle requests.
- gRPC client to make requests to the server.


## 🚀 Installation and Setup

### **Prerequisites**
- [Node.js](https://nodejs.org/) (version 14 or later).
- [npm](https://www.npmjs.com/) (comes with Node.js).

### **Setup Steps**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alfadexters/GRPC-with-Node.js.git
   cd GRPC-with-Node.js
    ```
2. **Install dependencies:**
  ```bash
    npm install
   ```
## ▶️ Running the Application
### **1. Start the Server**

Run the following command to start the server:
```bash
node server.js
```
If everything works correctly, you should see the message:
```bash
gRPC Server running on port 50051
```
### **2. Run the Client**

In another terminal, run the client to make a request to the server:
```bash
node client.js
```
If the server is running correctly, you should see the result:
```bash
Sum result: 10
```
## 🛠️ Features
gRPC Service

The service has a single operation called Add:

   - RPC Method: Add
   - Input: AddRequest (with two numbers num1 and num2).
   - Output: AddResponse (with the sum result).

Definition in the calculator.proto file:
```proto
syntax = "proto3";

service Calculator {
  rpc Add (AddRequest) returns (AddResponse);
}

message AddRequest {
  double num1 = 1;
  double num2 = 2;
}

message AddResponse {
  double result = 1;
}
```

📚 Dependencies

    @grpc/grpc-js: gRPC library for Node.js.
    @grpc/proto-loader: To load .proto files in Node.js.

