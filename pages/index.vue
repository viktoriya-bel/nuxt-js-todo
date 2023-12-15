<template>
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
            <td class="text-transform">{{ item.id }}</td>
            <td class="text-transform">{{ item.todo }}</td>
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
</script>

<style scoped>
    tr.completed{
        color: blue;
    }

    tr.completed .text-transform{
        text-decoration-line: line-through;
    }
</style>
