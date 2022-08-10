const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const port =  process.env.PORT || 5000;


//using middleware to parse json data
app.use(express.json());

require("./db/conn");
app.use("/teacher", require("./routes/teacherRoutes"));
app.use("/student", require("./routes/studentRoutes"));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});