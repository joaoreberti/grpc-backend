import * as grpc from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import * as path from "path";
import {
  getShoppingListRequest,
  getShoppingListResponse,
} from "../proto/shopping_list";

// Load the protobuf
const packageDefinition = loadSync(
  path.resolve(__dirname, "../../proto/shopping_list.proto"),
  {
    keepCase: false,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

// Load the package definition
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;

const shoppingListProto = protoDescriptor.ShoppingList;

const getShoppingList = (
  call: grpc.ServerUnaryCall<getShoppingListRequest, any>,
  callback: grpc.sendUnaryData<getShoppingListResponse>
) => {
  const request = call.request;
  console.log(`Getting shopping list: ${request.id}`);

  const response: getShoppingListResponse = {
    currentItems: ["Milk", "Bread"],
  };

  console.log("Response:", response);

  callback(null, response);
};

// Create a new gRPC server
const server = new grpc.Server();
server.addService(shoppingListProto.service, {
  getShoppingList: getShoppingList,
});

// Start the server
server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server running on 0.0.0.0:${port}`);
  }
);
