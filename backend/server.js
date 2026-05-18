import connectDB from "./src/config/database.js";
import app from "./src/app.js";
import config from "./src/config/config.js";

connectDB();

let port = config.PORT;
app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
})

