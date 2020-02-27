"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = express_1.Router();
router.route('/').get(index_1.getAll);
exports.default = router;
