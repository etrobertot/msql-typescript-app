import { Router } from 'express'
import { getAuthors, createAuthor, getAuthor, deleteAuthor, updateAuthor } from '../controllers/author'

const router = Router();

router.route('/')
    .get(getAuthors)
    .post(createAuthor);

router.route('/:authorDni')
    .get(getAuthor)
    .delete(deleteAuthor)
    .put(updateAuthor);

export default router;