import mongoose from "mongoose";

let conn = null;

async function getConnection() {
  if (conn && conn.readyState === 1) return conn;
  const uri = Netlify.env.get("MONGO_URI");
  if (!uri) throw new Error("MONGO_URI environment variable is not set");
  conn = await mongoose.createConnection(uri).asPromise();
  conn.model(
    "Contact",
    new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true, lowercase: true, trim: true },
      message: { type: String, required: true },
      submittedAt: { type: Date, default: Date.now },
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
    const { name, email, message } = await req.json();
    const db = await getConnection();
    const Contact = db.model("Contact");
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return Response.json({ success: true, message: "Form submitted!" }, { status: 201 });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
};

export const config = {
  path: "/api/contact",
  method: "POST",
};
