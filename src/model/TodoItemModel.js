//todoItemを作成するモデル

//ユニークIDを管理する変数
let todoIdx = 0;

export class TodoItemModel {
    id;
    title;
    completed;

    constructor({title, completed}) {
        this.id = todoIdx++;
        this.title = title;
        this.completed = completed;
    }
}