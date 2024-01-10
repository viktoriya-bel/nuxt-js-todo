import {Todo} from "~/interface/todo.interface";

export class TodoService {
    static async setTodos(skip: number, limit: number): Promise<{ todos: Todo[], total: number }> {
        const result = await fetch(`https://dummyjson.com/todos?skip=${skip}&limit=${limit}`);
        return await result.json();
    }
}
