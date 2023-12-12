import mongoose from "mongoose";

export async function mongoConnect() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      dbName: "backend-project",
    });
    console.log("MongoDB connected.");
  } catch (error) {
    console.log(error.message);
  }
}

export async function mongoDisconnect() {
  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnected.");
  } catch (error) {
    console.log(error.message);
  }
}

export function mongoErrorListener() {
  mongoose.connection.on("error", (error) => {
    console.log(error.message);
  });
}

export function mongoConnectionListener() {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connection established.");
  });
}

export function mongoReconnectListener() {
  mongoose.connection.on("reconnected", () => {
    console.log("MongoDB reconnected.");
  });
}

export function mongoDisconnectListener() {
  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected.");
  });
}

export function mongoCloseListener() {
  mongoose.connection.on("close", () => {
    console.log("MongoDB connection closed.");
  });
}
