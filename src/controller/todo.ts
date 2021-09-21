/**
 * Created by liliangshan on 2021/9/21
 */
import {RequestHandler, Request, Response, NextFunction} from "express";
import {IllegalArgumentError} from "../error/errors";
import Todo from "../model/todo";
import {todoRepository} from "../repository/repository";


export const createTodo: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const text = (req.body as { text: string }).text;
  const id = Math.random();
  const todo = new Todo(id, text);
  todoRepository.save(todo);
  res.status(201).json({message: 'Todo created successfully', createdTodo: todo});
};

export const getTodos: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const todos = todoRepository.find();
  res.status(200).json({"todos": todos});
}

export const updateTodo: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const todoId = req.params.id
  if (!todoId) {
    throw new IllegalArgumentError("id is null");
  }
  const updateText = (req.body as { text: string }).text;
  const todo = todoRepository.findById(Number(todoId));
  todo.text = updateText;
  todoRepository.update(todo.id, todo)
  res.status(200).json({message: "todo update successfully.", updateTodo: todo});
}

export const deleteTodo: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const todoId = req.params.id
  if (!todoId) {
    throw new IllegalArgumentError("id is null");
  }
  const result = todoRepository.delete(Number(todoId));
  res.status(200).json({message: `todo delete is ${result}`, result})
}
