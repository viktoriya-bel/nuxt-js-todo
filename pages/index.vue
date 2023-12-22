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
                        <v-btn type="submit" color="success" block class="mt-2" @click="todos.push({ id: (Number(todos.at(-1)?.id) || 0) + 1, todo: newTodo, completed: false })">Add new todo</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
    <v-table density="compact">
        <thead>
        <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Todo</th>
            <th class="text-left">Completed</th>
            <th class="text-left"></th>
        </tr>
        </thead>
        <tbody>
        <tr
                v-for="(item, index) in todos"
                :key="item.id"
                :class="{ completed: item.completed }"
        >
            <td class="text">{{ item.id }}</td>
            <td class="text cell-size">{{ item.todo }}</td>
            <td class="text-xs-center">
                <v-checkbox
                        v-model="todos[index].completed"
                ></v-checkbox>
            </td>
            <td class="text-xs-center">
                <v-btn
                        class="ma-2"
                        color="red"
                        @click="todos.splice(index, 1)"
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
</template>

<script setup lang="ts">
    const { data: todos } = await useFetch('https://dummyjson.com/todos', {
        transform: (result: { todos: []; }) => {
            return [...result.todos];
        }
    });
    let newTodo = '';

    function remove(index: number) {
        console.log('todos', todos);
        console.log('index', index);
        // todos.splice(index, 1);
    }
</script>

<style scoped>
    tr.completed{
        color: blue;
    }

    tr.completed .text{
        text-decoration-line: line-through;
    }
</style>
