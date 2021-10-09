/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.gateway_protocol.ActivateJobsRequest');

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
proto.gateway_protocol.ActivateJobsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gateway_protocol.ActivateJobsRequest.repeatedFields_, null);
};
goog.inherits(proto.gateway_protocol.ActivateJobsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gateway_protocol.ActivateJobsRequest.displayName = 'proto.gateway_protocol.ActivateJobsRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gateway_protocol.ActivateJobsRequest.repeatedFields_ = [5];



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
proto.gateway_protocol.ActivateJobsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gateway_protocol.ActivateJobsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gateway_protocol.ActivateJobsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gateway_protocol.ActivateJobsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    worker: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxjobstoactivate: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fetchvariableList: jspb.Message.getRepeatedField(msg, 5),
    requesttimeout: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.gateway_protocol.ActivateJobsRequest}
 */
proto.gateway_protocol.ActivateJobsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gateway_protocol.ActivateJobsRequest;
  return proto.gateway_protocol.ActivateJobsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gateway_protocol.ActivateJobsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gateway_protocol.ActivateJobsRequest}
 */
proto.gateway_protocol.ActivateJobsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorker(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxjobstoactivate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFetchvariable(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequesttimeout(value);
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
proto.gateway_protocol.ActivateJobsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gateway_protocol.ActivateJobsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gateway_protocol.ActivateJobsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gateway_protocol.ActivateJobsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorker();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMaxjobstoactivate();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFetchvariableList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getRequesttimeout();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.gateway_protocol.ActivateJobsRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gateway_protocol.ActivateJobsRequest.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string worker = 2;
 * @return {string}
 */
proto.gateway_protocol.ActivateJobsRequest.prototype.getWorker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gateway_protocol.ActivateJobsRequest.prototype.setWorker = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timeout = 3;
 * @return {number}
 */
proto.gateway_protocol.ActivateJobsRequest.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gateway_protocol.ActivateJobsRequest.prototype.setTimeout = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 maxJobsToActivate = 4;
 * @return {number}
 */
proto.gateway_protocol.ActivateJobsRequest.prototype.getMaxjobstoactivate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.gateway_protocol.ActivateJobsRequest.prototype.setMaxjobstoactivate = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string fetchVariable = 5;
 * @return {!Array<string>}
 */
proto.gateway_protocol.ActivateJobsRequest.prototype.getFetchvariableList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
proto.gateway_protocol.ActivateJobsRequest.prototype.setFetchvariableList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.gateway_protocol.ActivateJobsRequest.prototype.addFetchvariable = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.gateway_protocol.ActivateJobsRequest.prototype.clearFetchvariableList = function() {
  this.setFetchvariableList([]);
};


/**
 * optional int64 requestTimeout = 6;
 * @return {number}
 */
proto.gateway_protocol.ActivateJobsRequest.prototype.getRequesttimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.gateway_protocol.ActivateJobsRequest.prototype.setRequesttimeout = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


