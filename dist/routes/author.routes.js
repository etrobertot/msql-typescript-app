"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const author_1 = require("../controllers/author");
const router = (0, express_1.Router)();
router.route('/')
    .get(author_1.getAuthors)
    .post(author_1.createAuthor);
router.route('/:authorDni')
    .get(author_1.getAuthor)
    .delete(author_1.deleteAuthor)
    .put(author_1.updateAuthor);
exports.default = router;
