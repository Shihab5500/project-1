import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login data:", email, password);

  // এখানে তুমি DB check করবে
  if (email === "test@test.com" && password === "12345678") {
    res.json({ message: "✅ Login Successful!" });
  } else {
    res.json({ message: "❌ Invalid Credentials" });
  }
});

// ✅ Signup API
app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Signup data:", name, email, password);

  // এখানে তুমি DB তে save করতে পারো
  res.json({ message: "✅ Signup Successful!" });
});

app.listen(5000, () => console.log("🚀 Server running at http://localhost:5000"));
