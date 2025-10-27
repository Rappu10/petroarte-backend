"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const NominaSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    total_horas: Number,
    horas_primarias: Number,
    horas_extras: Number,
    pago_semanal_base: Number,
    costo_hora_primaria: Number,
    total_horas_primarias: Number,
    pago_horas_primarias: Number,
    costo_hora_extra: Number,
    pago_horas_extras: Number,
    pago_semanal_calc: Number,
    descuentos: Number,
    pendiente_descuento: Number,
    total: Number,
    bono_semanal: Number,
    total_2: Number,
    bono_mensual: Number,
    comision: Number,
    total_con_bono_mensual: Number,
    extra: String,
    total_final: Number,
    semana: String,
    fechaRegistro: { type: Date, default: Date.now },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Nomina", NominaSchema);
