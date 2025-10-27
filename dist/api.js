"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmpleados = getEmpleados;
exports.createEmpleado = createEmpleado;
exports.updateEmpleado = updateEmpleado;
exports.deleteEmpleado = deleteEmpleado;
exports.getPrestamos = getPrestamos;
exports.createPrestamo = createPrestamo;
exports.deleteNomina = deleteNomina;
exports.createNomina = createNomina;
exports.getNominas = getNominas;
exports.getCheckins = getCheckins;
exports.createCheckins = createCheckins;
const API_URL = "http://localhost:4000/api";
// 🔹 Obtener lista de empleados
async function getEmpleados() {
    const res = await fetch(`${API_URL}/empleados`);
    if (!res.ok)
        throw new Error("Error al obtener empleados");
    return res.json();
}
// 🔹 Agregar nuevo empleado
async function createEmpleado(data) {
    const res = await fetch(`${API_URL}/empleados`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok)
        throw new Error("Error al crear empleado");
    return res.json();
}
// 🔹 Actualizar empleado
async function updateEmpleado(id, data) {
    const res = await fetch(`${API_URL}/empleados/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok)
        throw new Error("Error al actualizar empleado");
    return res.json();
}
// 🔹 Eliminar empleado
async function deleteEmpleado(id) {
    const res = await fetch(`${API_URL}/empleados/${id}`, { method: "DELETE" });
    if (!res.ok)
        throw new Error("Error al eliminar empleado");
    return res.json();
}
// 🔹 Obtener préstamos
async function getPrestamos() {
    const res = await fetch(`${API_URL}/prestamos`);
    if (!res.ok)
        throw new Error("Error al obtener préstamos");
    return res.json();
}
// 🔹 Crear préstamo
async function createPrestamo(data) {
    const res = await fetch(`${API_URL}/prestamos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok)
        throw new Error("Error al crear préstamo");
    return res.json();
}
// 🔹 Eliminar nómina
async function deleteNomina(id) {
    const res = await fetch(`${API_URL}/nominas/${id}`, { method: "DELETE" });
    if (!res.ok)
        throw new Error("Error al eliminar nómina");
    return res.json();
}
// 🔹 Guardar nómina (una fila individual)
async function createNomina(data) {
    const res = await fetch(`${API_URL}/nominas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok)
        throw new Error("Error al guardar nómina");
    return res.json();
}
// 🔹 Obtener todas las nóminas
async function getNominas() {
    const res = await fetch(`${API_URL}/nominas`);
    if (!res.ok)
        throw new Error("Error al obtener nóminas");
    return res.json();
}
// 🔹 Obtener todos los check-ins
async function getCheckins() {
    const res = await fetch(`${API_URL}/checkins`);
    if (!res.ok)
        throw new Error("Error al obtener check-ins");
    return res.json();
}
// 🔹 Crear varios check-ins (por día o semana)
async function createCheckins(registros) {
    const res = await fetch(`${API_URL}/checkins`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registros }),
    });
    if (!res.ok)
        throw new Error("Error al guardar check-ins");
    return res.json();
}
