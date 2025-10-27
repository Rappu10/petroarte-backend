"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CheckinSchema = new mongoose_1.default.Schema({
    empleadoId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Empleado" },
    nombre: { type: String, required: true },
    dia: { type: String, required: true },
    horaEntrada: { type: String, default: "00:00" },
    horaSalida: { type: String, default: "00:00" },
    horasTotales: { type: Number, default: 0 },
    fecha: { type: Date, default: Date.now },
    semana: { type: String, default: "" }
}, { timestamps: true });
exports.default = mongoose_1.default.model("Checkin", CheckinSchema);
