import "dotenv/config";

const CONFIG = {
  port: Number(process.env.PORT),
  sessionScret: process.env.SESSION_SECRET,
};

export default CONFIG;
