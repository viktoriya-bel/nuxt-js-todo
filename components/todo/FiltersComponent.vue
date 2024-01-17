<template>
    <v-sheet
            :elevation="8"
            border
            rounded
            class="container"
    >
        <div>
            <v-switch
                    v-model="isMe"
                    hide-details
                    inset
                    label="Показать все/мои"
                    @change="$emit('clickShowTodo', isMe)"
            >
            </v-switch>
        </div>
    </v-sheet>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    let isMe = ref(false);
</script>

<style scoped>
    .container{
        margin: 20px;
        padding: 20px;
    }
</style>
