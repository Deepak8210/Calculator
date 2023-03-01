const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { result: "00" });
});

app.post("/", (req, res) => {
  const num1 = Number(req.body.input1);
  const num2 = Number(req.body.input2);
  const btnPress = req.body.btnPress;

  let result;

  switch (btnPress) {
    case "add":
      result = Number(num1 + num2);
      break;
    case "sub":
      result = Number(num1 - num2);
      break;
    case "mul":
      result = Number(num1 * num2);
      break;
    case "div":
      result = Number(num1 / num2);
      break;
    case "clr":
      result = "00";
      break;
    default:
      res.send("enter correct numbers");
  }

  res.render("index", { result: result });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("running on port 3000!");
});
