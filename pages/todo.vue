<template>
    <TodoAddComponent @clickAdd="add"></TodoAddComponent>
    <TodoFiltersComponent @clickShowTodo="showSwitch"></TodoFiltersComponent>
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
     * User id
     */
    let id: number;

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
        todoStore.more(id);
    }

    /**
     * Function that switches the display from the whole list to the user list and back again
     * @param isMe {boolean}
     */
    async function showSwitch(isMe: boolean) {
        await todoStore.cleanData();
        const authStore = useAuthStore();
        const { getId } = storeToRefs(authStore);
        id = isMe ? getId.value : null;
        todoStore.setTodos(id);
    }
</script>

<style scoped>
</style>
