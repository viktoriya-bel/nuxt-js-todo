import {Todo, TodoStore} from "~/interface/todo.interface";
import {TodoService} from "~/service/todo.service";

const todoService = TodoService;


export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [],
        loading: false,
        total: 0,
        skip: 0,
        limit: 10,
        lastID: null,
        editIndex: -1,
    }),
    getters: {
        getTodos: (state: TodoStore) => state.todos.sort((a, b) => a.id > b.id ? 1 : -1),
        isLoading: (state: TodoStore) => state.loading,
        isMore: (state: TodoStore) => state.skip + state.limit < state.total,
    },
    actions: {
        /**
         * Retrieving data from the server
         */
        async setTodos() {
            this.loading = true;
            const { todos, total } = await todoService.setTodos(this.skip, this.limit);
            this.todos.push(...todos);
            this.total = total;
            this.loading = false;
        },
        /**
         * Method for data pagination
         */
        async more() {
            this.skip += this.limit;
            this.setTodos();
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
