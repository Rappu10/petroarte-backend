// ✅ Configuración CORS global
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { MONGO_URI, PORT } from "./config";
import empleadosRoutes from "./routes/empleados";
import prestamosRoutes from "./routes/prestamos";
import nominasRoutes from "./routes/nominas";
import checkinsRoutes from "./routes/checkins";

const app = express();

// 🌐 CORS abierto para todo (permite localhost y tu dominio)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// 🔗 Rutas API
app.use("/api/empleados", empleadosRoutes);
app.use("/api/prestamos", prestamosRoutes);
app.use("/api/nominas", nominasRoutes);
app.use("/api/checkins", checkinsRoutes);

// 🔌 Conexión a MongoDB Atlas
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
  })
  .catch((err) => console.error("❌ Error al conectar MongoDB:", err));