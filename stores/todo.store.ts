import {Todo, TodoStore} from "~/interface/todo.interface";
import {TodoService} from "~/service/todo.service";

const todoService = TodoService;


export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [],
        loading: false,
    }),
    getters: {
        getTodos: (state: TodoStore) => state.todos,
        isLoading: (state: TodoStore) => state.loading,
    },
    actions: {
        async setTodos() {
            this.loading = true;
            const result = await todoService.setTodos();
            this.todos = result;
            this.loading = false;
        }
    }
});
