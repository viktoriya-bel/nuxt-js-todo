<template>
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
                v-for="(item, index) in todos"
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
                        v-model="todos[index].completed"
                ></v-checkbox>
            </td>
            <td class="text-xs-center">
                <TodoButtonComponent classString="ma-2" :colorString="item?.editable ? 'success' : 'orange-darken-2'" @clickBtn="$emit('clickEdit', index)">
                    <v-icon
                            icon="mdi-pencil"
                    ></v-icon>
                </TodoButtonComponent>
            </td>
            <td class="text-xs-center">
                <TodoButtonComponent text="Удалить" classString="ma-2" colorString="red" @clickBtn="$emit('clickRemove', index)">
                    <v-icon
                            end
                            icon="mdi-cancel"
                    ></v-icon>
                </TodoButtonComponent>
            </td>
        </tr>
        </tbody>
    </v-table>
</template>

<script setup lang="ts">
    import {defineProps} from "@vue/runtime-core";

    const props = defineProps({
        todos: {
            type: Array,
            required: true,
            default: () => [],
        },
    });
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
</style>
