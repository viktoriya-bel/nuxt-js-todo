export interface TodoInterface {
    id: number;
    todo: string;
    completed: boolean;
    editable?: boolean;
}
export interface TodoStoreInterface {
    todos : TodoInterface[];
    loading: boolean;
    total: number;
    skip: number;
    limit: number;
    lastID: number;
    editIndex: number;
}
