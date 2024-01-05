const express = require("express");
const dictionaryRouter = require("./routes/dictionary.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", dictionaryRouter);

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
