import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
    network : { type: Object },
    reqHeaders : { type: Object },
    reqBody : { type: Object },
    resHeaders : { type: Object },
    resBody : { type: Object }
});

const Logs = mongoose.model('Log', LogSchema);
export default Logs;