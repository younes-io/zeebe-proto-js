/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.gateway_protocol.ProcessMetadata');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gateway_protocol.ProcessMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gateway_protocol.ProcessMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gateway_protocol.ProcessMetadata.displayName = 'proto.gateway_protocol.ProcessMetadata';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gateway_protocol.ProcessMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.gateway_protocol.ProcessMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gateway_protocol.ProcessMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gateway_protocol.ProcessMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    bpmnprocessid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0),
    processkey: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resourcename: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gateway_protocol.ProcessMetadata}
 */
proto.gateway_protocol.ProcessMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gateway_protocol.ProcessMetadata;
  return proto.gateway_protocol.ProcessMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gateway_protocol.ProcessMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gateway_protocol.ProcessMetadata}
 */
proto.gateway_protocol.ProcessMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBpmnprocessid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProcesskey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourcename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gateway_protocol.ProcessMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gateway_protocol.ProcessMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gateway_protocol.ProcessMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gateway_protocol.ProcessMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBpmnprocessid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getProcesskey();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getResourcename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string bpmnProcessId = 1;
 * @return {string}
 */
proto.gateway_protocol.ProcessMetadata.prototype.getBpmnprocessid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gateway_protocol.ProcessMetadata.prototype.setBpmnprocessid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 version = 2;
 * @return {number}
 */
proto.gateway_protocol.ProcessMetadata.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gateway_protocol.ProcessMetadata.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 processKey = 3;
 * @return {number}
 */
proto.gateway_protocol.ProcessMetadata.prototype.getProcesskey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gateway_protocol.ProcessMetadata.prototype.setProcesskey = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string resourceName = 4;
 * @return {string}
 */
proto.gateway_protocol.ProcessMetadata.prototype.getResourcename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.gateway_protocol.ProcessMetadata.prototype.setResourcename = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};

