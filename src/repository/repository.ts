/**
 * Created by liliangshan on 2021/9/21
 */
import Todo from "../model/todo";
import {NotFoundError} from "../error/errors";

export interface Repository<T> {

  findById(id: number): T | null;

  find(): Array<T>;

  save(model: T): number;

  update(id: number, model: T): boolean;

  delete(id: number): boolean;

}


const todos: Array<Todo> = [];

class TodoRepository implements Repository<Todo> {

  delete(id: number): boolean {
    if (todos.length === 0) {
      return false;
    }
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
      return false;
    }
    const todo = todos[todoIndex];
    todo.state = false;
    return true;
  }

  find(): Array<Todo> {
    return todos.filter(it => it.state);
  }

  findById(id: number): Todo {
    const todo = todos.find(it => it.id === id && it.state);
    if (!todo) {
      throw new NotFoundError(" todo is not found.");
    }
    return todo;
  }

  save(model: Todo): number {
    model.id = model.id ? model.id : Math.random();
    todos.push(model);
    return model.id;
  }

  update(id: number, model: Todo): boolean {
    model.id = id;
    const todoIndex = todos.findIndex(item => item.id === id);
    if (todoIndex < 0) {
      return false;
    }
    todos[todoIndex] = model;
    return true;
  }

}

export const todoRepository = new TodoRepository();
