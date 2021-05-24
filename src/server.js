const express = require("express");
const brandsRouter = require("./routes/brandsRouter");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/marcas", brandsRouter);

app.listen(process.env.PORT || 3333, () => {
  console.log("[SERVER] Listening on port 3333");
});
