import {Todo} from "~/interface/todo.interface";

export class TodoService {
    static async setTodos(): Promise<Todo[]> {
        const {data: todos} = await useFetch('https://dummyjson.com/todos', {
            transform: (result: { todos: []; }) => {
                return [...result.todos];
            }
        });
        return todos._rawValue;
    }
}
