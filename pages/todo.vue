<template>
    <TodoAddComponent @clickAdd="add"></TodoAddComponent>
    <TodoVeiwComponent :todos="getTodos" @clickEdit="edit" @clickRemove="remove"></TodoVeiwComponent>
    <TodoLoadingComponent v-if="isLoading"></TodoLoadingComponent>
    <TodoMoreComponent v-if="isMore && !isLoading" @clickMore="more()"></TodoMoreComponent>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'privacy'
    });
    /**
     * To-do list retrieval
     */
    const todoStore = useTodoStore();
    todoStore.setTodos();
    const { isLoading, getTodos, isMore } = storeToRefs(todoStore);

    /**
     * Item deletion function
     * @param index {number}
     */
    function remove(index: number) {
        todoStore.remove(index);
    }

    /**
     * Item addition function
     * @param newTodo {string}
     */
    function add(newTodo: string) {
        if (!newTodo.length) return;
        todoStore.add(newTodo);
    }

    /**
     * Function allowing to edit the name of the case
     * @param index {number}
     */
    function edit(index: number) {
        todoStore.edit(index);
    }

    /**
     * Function for data pagination
     */
    function more() {
        todoStore.more();
    }
</script>

<style scoped>
</style>
