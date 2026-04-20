import mongoose from "mongoose";

let conn = null;

async function getConnection() {
  if (conn && conn.readyState === 1) return conn;
  const uri = Netlify.env.get("MONGO_URI");
  if (!uri) throw new Error("MONGO_URI environment variable is not set");
  conn = await mongoose.createConnection(uri).asPromise();
  conn.model(
    "User",
    new mongoose.Schema({
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    })
  );
  return conn;
}

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ success: false, message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { username, password } = await req.json();
    const db = await getConnection();
    const User = db.model("User");
    const user = await User.findOne({ username });

    if (!user) {
      return Response.json({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
      return Response.json({ success: false, message: "Invalid password" });
    }

    // Generate a simple token (the original app used JWT with a hardcoded secret)
    const token = btoa(JSON.stringify({ userId: user._id, username: user.username, exp: Date.now() + 3600000 }));

    return Response.json({ success: true, token });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
};

export const config = {
  path: "/api/login",
  method: "POST",
};
