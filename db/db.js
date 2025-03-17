const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hello:6z8RCN7w2xu846Jb@interviews.l73k0.mongodb.net/asim?retryWrites=true&w=majority&appName=Interviews"
    );
    console.log("connenct to db");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDb;
// export default connectDb;
