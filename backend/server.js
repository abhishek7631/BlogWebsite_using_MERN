const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

const port = process.env.port;

mongoose
  .connect("mongodb://localhost:27017/UKblog")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const blogSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Blog = mongoose.model("Blog", blogSchema);

app.get("/", async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json({ message: blog });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const blog = await Blog.create({ name, email, password: hashPassword });
    res.status(200).json({ message: "sign up successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const blog = await Blog.findOne({ email });
    if (!blog) return res.status(400).json({ message: "wrong credentials" });

    const compare = await bcrypt.compare(password, blog.password);

    if (!compare) return res.status(400).json({ message: "wrong password" });

    res.status(200).json({ message: "login successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
