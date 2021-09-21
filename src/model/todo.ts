/**
 * Created by liliangshan on 2021/9/21
 */
import Debug, {Debugger} from 'debug';

const debug: Debugger = Debug("node-server:model/todo");

export default class Todo {

  id: number;
  text: string;
  state: boolean;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
    this.state = true
  }

  todo(): void {
    debug(`id:{} text:{}`, this.id, this.text);
  }



}
