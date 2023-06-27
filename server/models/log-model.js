import mongoose from 'mongoose';

const obj = {
  type: Object,
  required: true,
}

const reqSchema = {
  url: obj,
  method: obj,
  headers: obj,
  body: obj
}

const resSchema = {
  statusCode: obj,
  headers: obj,
  body: obj
}

const LogSchema = new mongoose.Schema({
    request : [reqSchema],
    response : [resSchema]
}, {
    timestamps: true
});

/**
 * "request": {
    "url": "URL of the API endpoint",
    "method": "HTTP method (GET, POST, PUT, DELETE, etc.)",
    "headers": {
      "key1": "value1",
      "key2": "value2",
      ...
    },
    "body": "Request payload (if applicable)"
  },
  "response": {
    "statusCode": "HTTP status code",
    "headers": {
      "key1": "value1",
      "key2": "value2",
      ...
    },
    "body": "Response payload (if applicable)"
 */

const Logs = mongoose.model('Log', LogSchema);
export default Logs;