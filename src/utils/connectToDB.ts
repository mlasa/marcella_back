import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URL = process.env.DATABASE;

const connectToDB = () => {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
  return connect(MONGODB_URL, options);
};
export default connectToDB