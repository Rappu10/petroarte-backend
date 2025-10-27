"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Nomina_1 = __importDefault(require("../models/Nomina"));
const router = (0, express_1.Router)();
// Obtener todas las nóminas
router.get("/", async (req, res) => {
    try {
        const data = await Nomina_1.default.find().sort({ createdAt: -1 });
        res.json(data);
    }
    catch (err) {
        console.error("❌ Error al obtener nóminas:", err);
        res.status(500).json({ error: "Error al obtener nóminas" });
    }
});
// Crear varias nóminas (una por empleado)
router.post("/", async (req, res) => {
    try {
        const { empleados, semana } = req.body;
        // Si viene un arreglo de empleados, los guardamos individualmente
        if (Array.isArray(empleados)) {
            const registros = empleados.map((emp) => ({
                ...emp,
                semana,
                fechaRegistro: new Date(),
            }));
            const result = await Nomina_1.default.insertMany(registros);
            return res.json(result);
        }
        // Si es un solo registro
        const nuevaNomina = new Nomina_1.default(req.body);
        const saved = await nuevaNomina.save();
        res.json(saved);
    }
    catch (err) {
        console.error("❌ Error al guardar nómina:", err);
        res.status(500).json({ error: "Error al guardar nómina" });
    }
});
// Eliminar todas las nóminas (opcional, útil para limpiar)
router.delete("/all", async (req, res) => {
    try {
        await Nomina_1.default.deleteMany({});
        res.json({ message: "Todas las nóminas eliminadas" });
    }
    catch (err) {
        res.status(500).json({ error: "Error al eliminar nóminas" });
    }
});
exports.default = router;
