require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path');
const userRoutes = require("./src/routes/user.route");

const app = express();
const dirname = path.resolve();
app.use(express.static(path.join(dirname, '/frontend/dist')));
app.use(cors());
app.use(express.json());
app.use("/api/v1", userRoutes);
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.resolve(dirname, 'frontend', 'dist', 'index.html'));
});
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
});