"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const empleados_1 = __importDefault(require("./routes/empleados"));
const prestamos_1 = __importDefault(require("./routes/prestamos"));
const nominas_1 = __importDefault(require("./routes/nominas"));
const checkins_1 = __importDefault(require("./routes/checkins"));
const app = (0, express_1.default)();
// ✅ CONFIGURACIÓN CORS
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173", // desarrollo local
        "https://nominas-petroarte.vercel.app", // dominio vercel
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // 👈 importante para evitar el error
}));
app.use(express_1.default.json());
// ✅ Rutas API
app.use("/api/empleados", empleados_1.default);
app.use("/api/prestamos", prestamos_1.default);
app.use("/api/nominas", nominas_1.default);
app.use("/api/checkins", checkins_1.default);
// ✅ Conexión a MongoDB y arranque
mongoose_1.default
    .connect(config_1.MONGO_URI)
    .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(config_1.PORT, () => console.log(`🚀 Servidor en puerto ${config_1.PORT}`));
})
    .catch((err) => console.error("❌ Error al conectar MongoDB:", err));
