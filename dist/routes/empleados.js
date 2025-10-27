"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Empleado_1 = __importDefault(require("../models/Empleado"));
const router = express_1.default.Router();
// Obtener todos
router.get("/", async (_req, res) => {
    const empleados = await Empleado_1.default.find().sort({ createdAt: -1 });
    res.json(empleados);
});
// Crear nuevo
router.post("/", async (req, res) => {
    try {
        const nuevo = new Empleado_1.default(req.body);
        await nuevo.save();
        res.status(201).json(nuevo);
    }
    catch (err) {
        res.status(400).json({ error: "No se pudo crear empleado", details: err });
    }
});
// Actualizar
router.put("/:id", async (req, res) => {
    try {
        const upd = await Empleado_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(upd);
    }
    catch (err) {
        res.status(400).json({ error: "No se pudo actualizar", details: err });
    }
});
// Eliminar
router.delete("/:id", async (req, res) => {
    try {
        await Empleado_1.default.findByIdAndDelete(req.params.id);
        res.json({ ok: true });
    }
    catch (err) {
        res.status(400).json({ error: "No se pudo eliminar", details: err });
    }
});
exports.default = router;
