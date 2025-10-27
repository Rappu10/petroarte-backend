"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Prestamo_1 = __importDefault(require("../models/Prestamo"));
const router = express_1.default.Router();
router.get("/", async (_req, res) => {
    const prestamos = await Prestamo_1.default.find().sort({ createdAt: -1 });
    res.json(prestamos);
});
router.post("/", async (req, res) => {
    try {
        const nuevo = new Prestamo_1.default(req.body);
        await nuevo.save();
        res.status(201).json(nuevo);
    }
    catch (err) {
        res.status(400).json({ error: "No se pudo crear préstamo", details: err });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const upd = await Prestamo_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(upd);
    }
    catch (err) {
        res.status(400).json({ error: "No se pudo actualizar préstamo", details: err });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        await Prestamo_1.default.findByIdAndDelete(req.params.id);
        res.json({ ok: true });
    }
    catch (err) {
        res.status(400).json({ error: "No se pudo eliminar préstamo", details: err });
    }
});
exports.default = router;
