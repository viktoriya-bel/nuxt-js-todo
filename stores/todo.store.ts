import {Todo, TodoStore} from "~/interface/todo.interface";
import {TodoService} from "~/service/todo.service";

const todoService = TodoService;


export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [],
        loading: false,
        total: 0,
        lastID: null,
        editIndex: -1,
    }),
    getters: {
        getTodos: (state: TodoStore) => state.todos,
        isLoading: (state: TodoStore) => state.loading,
    },
    actions: {
        /**
         * Retrieving data from the server
         */
        async setTodos() {
            this.loading = true;
            const { todos, total } = await todoService.setTodos();
            this.todos = todos;
            this.total = total;
            this.loading = false;
        },
        /**
         * Item deletion function
         * @param index {number}
         */
        remove(index: number) {
            this.todos.splice(index, 1);
        },
        /**
         * Item addition function
         * @param newTodo {string}
         */
        add(newTodo: string) {
            const id = (this.lastID || this.total) + 1;
            this.todos.push({ id , todo: newTodo, completed: false, editable: false });
            this.lastID = id;
        },
        /**
         * Function allowing to edit the name of the case
         * @param index {number}
         */
        edit(index: number) {
            if (this.editIndex >= 0) this.todos[this.editIndex]['editable'] = false;
            if (this.editIndex === index) {
                this.editIndex = -1;
                return;
            }

            this.editIndex = index;
            this.todos[this.editIndex]['editable'] = true;
        }
    }
});
