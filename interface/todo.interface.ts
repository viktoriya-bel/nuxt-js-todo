export interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    editable?: boolean;
}
export interface TodoStore {
    todos : Todo[];
    loading: boolean;
}
