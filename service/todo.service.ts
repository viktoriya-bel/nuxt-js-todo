import {Todo} from "~/interface/todo.interface";

export class TodoService {
    static async setTodos(): Promise<{ todos: Todo[], total: number }> {
        const result = await fetch('https://dummyjson.com/todos');
        return await result.json();
    }
}
