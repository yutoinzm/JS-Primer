//todoListを保持、情報を返すモデル
import { EventEmitter } from "../EventEmitter.js";

export class TodoListModel extends EventEmitter {
    #items;

    constructor(items = []) {
        super();
        this.#items = items;
    }

    getTotalCount() {
        return this.#items.length;
    }

    getTodoItems() {
        return this.#items;
    }
    //todoの状態が更新された時に呼び出されるリスナー関数を登録
    onChange(listener) {
        this.addEventListener("change", listener);
    }

    //状態が変更された時に呼ぶ。親で登録されたリスナー関数を呼ぶ
    emitChange() {
        this.emit("change");
    }

    addTodo(todoItem) {
        if(!todoItem.title) { return; }
        this.#items.push(todoItem);
        this.emitChange();
    }


    updateTodo({ id, completed}) {
        const todoItem = this.#items.find(todo => todo.id === id);
        if(!todoItem) {
            return;
        }
        todoItem.completed = completed;
        this.emitChange();
    }

    deleteTodo({ id }) {
        this.#items = this.#items.filter(todo => {
            return todo.id !== id;
        });
        this.emitChange();
    }

}