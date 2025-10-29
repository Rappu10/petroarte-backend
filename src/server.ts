import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MONGO_URI, PORT } from "./config";
import empleadosRoutes from "./routes/empleados";
import prestamosRoutes from "./routes/prestamos";
import nominasRoutes from "./routes/nominas";
import checkinsRoutes from "./routes/checkins";

const app = express();

// ✅ Configuración CORS correcta (con credenciales)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://tusitio.hostingerapp.com", // ✅ tu dominio de Hostinger
      "https://tusitio.vercel.app", // ✅ si también usas Vercel
      "https://tusitio.com", // ✅ tu dominio final si lo tienes
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Rutas API
app.use("/api/empleados", empleadosRoutes);
app.use("/api/prestamos", prestamosRoutes);
app.use("/api/nominas", nominasRoutes);
app.use("/api/checkins", checkinsRoutes);

// ✅ Conexión MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
  })
  .catch((err) => console.error("❌ Error al conectar MongoDB:", err));
