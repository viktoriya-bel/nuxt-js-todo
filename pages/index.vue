<template>
    <v-sheet class="mx-auto">
        <v-form @submit.prevent>
            <v-container>
                <v-row>
                    <v-col
                            cols="12"
                            md="8"
                    >
                        <v-text-field
                                v-model="newTodo"
                                :rules="rules"
                                label="New todo"
                        ></v-text-field>
                    </v-col>
                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-btn type="submit" color="success" block class="mt-2" @click="add()">Add new todo</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
    <v-table fixed-header="true" class="table">
        <thead>
        <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Todo</th>
            <th class="text-left">Completed</th>
            <th class="text-left"></th>
            <th class="text-left"></th>
        </tr>
        </thead>
        <tbody>
        <tr
                v-for="(item, index) in todosList"
                :key="item.id"
                :class="{ completed: item.completed }"
        >
            <td class="text">{{ item.id }}</td>
            <td class="text cell-size">
                <template v-if="item?.editable">
                    <v-text-field
                            v-model="item.todo"
                    ></v-text-field>
                </template>
                <template v-else>
                    {{ item.todo }}
                </template>
            </td>
            <td class="text-xs-center">
                <v-checkbox
                        v-model="todosList[index].completed"
                ></v-checkbox>
            </td>
            <td class="text-xs-center">
                <v-btn
                        class="ma-2"
                        :color="item?.editable ? 'success' : 'orange-darken-2'"
                        @click="edit(index)"
                >
                    <v-icon
                            icon="mdi-pencil"
                    ></v-icon>
                </v-btn>
            </td>
            <td class="text-xs-center">
                <v-btn
                        class="ma-2"
                        color="red"
                        @click="remove(index)"
                >
                    Удалить
                    <v-icon
                            end
                            icon="mdi-cancel"
                    ></v-icon>
                </v-btn>
            </td>
        </tr>
        </tbody>
    </v-table>
    <div v-if="isLoading" class="progress-block">
        <div class="progress-text">Идёт загрузка...</div>
        <v-progress-linear
                color="deep-purple-accent-4"
                indeterminate
                rounded
                height="6"
        ></v-progress-linear>
    </div>
</template>

<script setup lang="ts">

    import {Todo} from "~/interface/todo.interface";

    /**
     * Text for creating a new to-do
     */
    let newTodo = '';

    /**
     * To-do list array
     */
    let todosList: Todo[] = [];

    /**
     * Index of the selected item for editing
     */
    let editIndex: number = -1;

    /**
     * To-do list retrieval
     */
    const todoStore = useTodoStore();
    todoStore.setTodos();
    const { isLoading, getTodos } = storeToRefs(todoStore)
    todosList = toRef(getTodos);

    /**
     * Item deletion function
     * @param index {number}
     */
    function remove(index: number) {
        unref(todosList).splice(index, 1);
    }

    /**
     * Item addition function
     */
    function add() {
        if (!newTodo.length) return;
        const todosListLink = unref(todosList) as Todo[];
        todosListLink.push({ id: (Number(todosListLink.at(-1)?.id) || 0) + 1, todo: newTodo, completed: false, editable: false })
    }

    /**
     * Function allowing to edit the name of the case
     * @param index {number}
     */
    function edit(index: number) {
        if (editIndex >= 0) unref(todosList)[editIndex]['editable'] = false;
        if (editIndex === index) {
            editIndex = -1;
            return;
        }

        editIndex = index;
        unref(todosList)[editIndex]['editable'] = true;
    }
</script>

<style scoped>
    tr.completed{
        color: blue;
    }

    tr.completed .text{
        text-decoration-line: line-through;
    }
    .cell-size {
        width: 100%;
    }
    .table {
        margin: 20px;
    }
    .progress-block{
        max-width: 300px;
        margin: auto;
    }
    .progress-text{
        text-align: center;
    }
</style>
