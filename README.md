# zeebe-proto-js

1. Clone the project

2. Install the [protobuf compiler](https://grpc.io/docs/protoc-installation/)

3. Run the command `protoc -I=src --js_out=dist src/zeebe.proto`

N.B: The latest version of the [`zeebe.proto` file](https://github.com/camunda-community-hub/zeebe-client-node-js/blob/master/proto/zeebe.proto)
