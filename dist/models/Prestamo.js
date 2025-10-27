"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const prestamoSchema = new mongoose_1.Schema({
    empleadoId: { type: String, required: true },
    monto: { type: Number, required: true },
    descripcion: { type: String },
    pagado: { type: Boolean, default: false },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Prestamo", prestamoSchema);
