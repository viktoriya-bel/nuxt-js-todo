import {TodoInterface} from "~/interface/todo.interface";

export class TodoService {
    /**
     * Getting a list of tasks for all users
     * @param skip {number}
     * @param limit {number}
     */
    static async setTodos(skip: number, limit: number): Promise<{ todos: TodoInterface[], total: number }> {
        const result = await fetch(`https://dummyjson.com/todos?skip=${skip}&limit=${limit}`);
        return await result.json();
    }

    /**
     * Getting a list of tasks by user
     * @param skip {number}
     * @param limit {number}
     * @param id {number}
     */
    static async setTodosByUser(skip: number, limit: number, id: number): Promise<{ todos: TodoInterface[], total: number }> {
        const result = await fetch(`https://dummyjson.com/todos/user/${id}?skip=${skip}&limit=${limit}`);
        return await result.json();
    }
}
