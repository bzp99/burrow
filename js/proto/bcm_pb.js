/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = require('./github.com/gogo/protobuf/gogoproto/gogo_pb.js');
goog.object.extend(proto, github_com_gogo_protobuf_gogoproto_gogo_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
goog.exportSymbol('proto.bcm.PersistedState', null, global);
goog.exportSymbol('proto.bcm.SyncInfo', null, global);
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
proto.bcm.SyncInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bcm.SyncInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bcm.SyncInfo.displayName = 'proto.bcm.SyncInfo';
}
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
proto.bcm.PersistedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bcm.PersistedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bcm.PersistedState.displayName = 'proto.bcm.PersistedState';
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
proto.bcm.SyncInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bcm.SyncInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bcm.SyncInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bcm.SyncInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    latestblockheight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    latestblockhash: msg.getLatestblockhash_asB64(),
    latestapphash: msg.getLatestapphash_asB64(),
    latestblocktime: (f = msg.getLatestblocktime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    latestblockseentime: (f = msg.getLatestblockseentime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    latestblockduration: (f = msg.getLatestblockduration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bcm.SyncInfo}
 */
proto.bcm.SyncInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bcm.SyncInfo;
  return proto.bcm.SyncInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bcm.SyncInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bcm.SyncInfo}
 */
proto.bcm.SyncInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLatestblockheight(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLatestblockhash(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLatestapphash(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLatestblocktime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLatestblockseentime(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLatestblockduration(value);
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
proto.bcm.SyncInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bcm.SyncInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bcm.SyncInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bcm.SyncInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatestblockheight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLatestblockhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getLatestapphash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getLatestblocktime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLatestblockseentime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLatestblockduration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 LatestBlockHeight = 1;
 * @return {number}
 */
proto.bcm.SyncInfo.prototype.getLatestblockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.bcm.SyncInfo.prototype.setLatestblockheight = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes LatestBlockHash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bcm.SyncInfo.prototype.getLatestblockhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes LatestBlockHash = 2;
 * This is a type-conversion wrapper around `getLatestblockhash()`
 * @return {string}
 */
proto.bcm.SyncInfo.prototype.getLatestblockhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLatestblockhash()));
};


/**
 * optional bytes LatestBlockHash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLatestblockhash()`
 * @return {!Uint8Array}
 */
proto.bcm.SyncInfo.prototype.getLatestblockhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLatestblockhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.bcm.SyncInfo.prototype.setLatestblockhash = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes LatestAppHash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bcm.SyncInfo.prototype.getLatestapphash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes LatestAppHash = 3;
 * This is a type-conversion wrapper around `getLatestapphash()`
 * @return {string}
 */
proto.bcm.SyncInfo.prototype.getLatestapphash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLatestapphash()));
};


/**
 * optional bytes LatestAppHash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLatestapphash()`
 * @return {!Uint8Array}
 */
proto.bcm.SyncInfo.prototype.getLatestapphash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLatestapphash()));
};


/** @param {!(string|Uint8Array)} value */
proto.bcm.SyncInfo.prototype.setLatestapphash = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp LatestBlockTime = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bcm.SyncInfo.prototype.getLatestblocktime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.bcm.SyncInfo.prototype.setLatestblocktime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.bcm.SyncInfo.prototype.clearLatestblocktime = function() {
  this.setLatestblocktime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bcm.SyncInfo.prototype.hasLatestblocktime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp LatestBlockSeenTime = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bcm.SyncInfo.prototype.getLatestblockseentime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.bcm.SyncInfo.prototype.setLatestblockseentime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.bcm.SyncInfo.prototype.clearLatestblockseentime = function() {
  this.setLatestblockseentime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bcm.SyncInfo.prototype.hasLatestblockseentime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration LatestBlockDuration = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bcm.SyncInfo.prototype.getLatestblockduration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.bcm.SyncInfo.prototype.setLatestblockduration = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.bcm.SyncInfo.prototype.clearLatestblockduration = function() {
  this.setLatestblockduration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bcm.SyncInfo.prototype.hasLatestblockduration = function() {
  return jspb.Message.getField(this, 6) != null;
};





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
proto.bcm.PersistedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bcm.PersistedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bcm.PersistedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bcm.PersistedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    apphashafterlastblock: msg.getApphashafterlastblock_asB64(),
    lastblocktime: (f = msg.getLastblocktime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastblockheight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    genesishash: msg.getGenesishash_asB64()
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
 * @return {!proto.bcm.PersistedState}
 */
proto.bcm.PersistedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bcm.PersistedState;
  return proto.bcm.PersistedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bcm.PersistedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bcm.PersistedState}
 */
proto.bcm.PersistedState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setApphashafterlastblock(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastblocktime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastblockheight(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setGenesishash(value);
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
proto.bcm.PersistedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bcm.PersistedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bcm.PersistedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bcm.PersistedState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApphashafterlastblock_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getLastblocktime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastblockheight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getGenesishash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional bytes AppHashAfterLastBlock = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bcm.PersistedState.prototype.getApphashafterlastblock = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes AppHashAfterLastBlock = 1;
 * This is a type-conversion wrapper around `getApphashafterlastblock()`
 * @return {string}
 */
proto.bcm.PersistedState.prototype.getApphashafterlastblock_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getApphashafterlastblock()));
};


/**
 * optional bytes AppHashAfterLastBlock = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getApphashafterlastblock()`
 * @return {!Uint8Array}
 */
proto.bcm.PersistedState.prototype.getApphashafterlastblock_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getApphashafterlastblock()));
};


/** @param {!(string|Uint8Array)} value */
proto.bcm.PersistedState.prototype.setApphashafterlastblock = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp LastBlockTime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bcm.PersistedState.prototype.getLastblocktime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.bcm.PersistedState.prototype.setLastblocktime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.bcm.PersistedState.prototype.clearLastblocktime = function() {
  this.setLastblocktime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bcm.PersistedState.prototype.hasLastblocktime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 LastBlockHeight = 3;
 * @return {number}
 */
proto.bcm.PersistedState.prototype.getLastblockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.bcm.PersistedState.prototype.setLastblockheight = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes GenesisHash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.bcm.PersistedState.prototype.getGenesishash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes GenesisHash = 4;
 * This is a type-conversion wrapper around `getGenesishash()`
 * @return {string}
 */
proto.bcm.PersistedState.prototype.getGenesishash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getGenesishash()));
};


/**
 * optional bytes GenesisHash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getGenesishash()`
 * @return {!Uint8Array}
 */
proto.bcm.PersistedState.prototype.getGenesishash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getGenesishash()));
};


/** @param {!(string|Uint8Array)} value */
proto.bcm.PersistedState.prototype.setGenesishash = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


goog.object.extend(exports, proto.bcm);
