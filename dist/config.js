"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.MONGO_URI = void 0;
require("dotenv").config();
exports.MONGO_URI = process.env.MONGO_URI || "";
exports.PORT = process.env.PORT || 4000;
