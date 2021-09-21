/**
 * Created by liliangshan on 2021/9/21
 */

import {Router} from "express";
import {createTodo, deleteTodo, getTodos, updateTodo} from "../controller/todo";

const router: Router = Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
