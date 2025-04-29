require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/user.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", userRoutes);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
});