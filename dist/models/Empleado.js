"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const empleadoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    puesto: { type: String, required: true },
    area: { type: String, required: true },
    estatus: { type: String, enum: ["Activo", "Baja"], default: "Activo" },
    tarifa: { type: Number, required: true },
    extraX: { type: Number, default: 1. },
    tipoPago: { type: String, enum: ["Por horas", "Semanal fijo"], default: "Por horas" },
    pagoSemanal: { type: Number, default: 0 },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Empleado", empleadoSchema);
