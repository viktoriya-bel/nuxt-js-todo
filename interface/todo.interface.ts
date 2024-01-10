export interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    editable?: boolean;
}
export interface TodoStore {
    todos : Todo[];
    loading: boolean;
    total: number;
    skip: number;
    limit: number;
    lastID: number;
    editIndex: number;
}
