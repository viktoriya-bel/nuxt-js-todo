import { TodoStoreInterface } from "~/interface/todo.interface";
import { TodoService } from "~/services/todo.service";

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
        getTodos: (state: TodoStoreInterface) => state.todos.sort((a, b) => a.id > b.id ? 1 : -1),
        isLoading: (state: TodoStoreInterface) => state.loading,
        isMore: (state: TodoStoreInterface) => state.skip + state.limit < state.total,
    },
    actions: {
        /**
         * Getting the list of tasks. if the user id is passed, only this user's data will be retrieved
         * @param id {number}
         */
        async setTodos(id?: number) {
            console.log('setTodos id', id);
            this.loading = true;
            const { todos, total } = id ? await todoService.setTodosByUser(this.skip, this.limit, id) : await todoService.setTodos(this.skip, this.limit);
            this.todos.push(...todos);
            this.total = total;
            this.loading = false;
        },

        /**
         * Data cleansing
         */
        async cleanData() {
            this.todos = [];
            this.total = 0;
            this.skip = 0;
        },

        /**
         * Method for data pagination
         */
        async more(id?: number) {
            this.skip += this.limit;
            this.setTodos(id);
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
