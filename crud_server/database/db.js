import mongoose from "mongoose";

const Connections = async () => {
  const USER = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;
  const MONGO_PORT = process.env.MONGO_PORT;
  const SRVVAL = process.env.SRVVAL;
  const MONGOCONT_NAME = process.env.MONGOCONT_NAME;

  // const URL = `mongodb+srv://${USER}:${PASSWORD}@cluster0.djmj1ek.mongodb.net/Hld-web-app`;
  if (MONGO_PORT) {
    URL = `mongodb+${SRVVAL}://${USER}:${PASSWORD}@${MONGOCONT_NAME}:${MONGO_PORT}/Hld-web-app`;
  } else {
    URL = `mongodb+${SRVVAL}://${USER}:${PASSWORD}@${MONGOCONT_NAME}/Hld-web-app`;
  }
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Db is connected successfully`);
  } catch (error) {
    console.log(`Db could not be connected!`, error.message);
  }
};

export default Connections;
