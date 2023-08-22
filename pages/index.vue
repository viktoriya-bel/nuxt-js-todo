<template>
    <v-table density="compact">
        <thead>
        <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Todo</th>
            <th class="text-left">Completed</th>
        </tr>
        </thead>
        <tbody>
        <tr
                v-for="item in todos"
                :key="item.id"
                :class="{ completed: item.completed }"
        >
            <td class="text-transform">{{ item.id }}</td>
            <td class="text-transform">{{ item.todo }}</td>
            <td class="text-xs-center">
                <v-checkbox :model-value="item.completed"
                ></v-checkbox>
            </td>
        </tr>
        </tbody>
    </v-table>
</template>

<script setup>
    const { data } = await useFetch('https://dummyjson.com/todos');
    const todos = [...data._rawValue.todos];
</script>

<style scoped>
    tr.completed{
        color: blue;
    }

    tr.completed .text-transform{
        text-decoration-line: line-through;
    }
</style>
