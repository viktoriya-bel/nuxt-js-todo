<template>
    <div class="bottom-block">
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
</script>

<style scoped>
    .bottom-block{
        max-width: 300px;
        margin: auto;
        padding-bottom: 100px;
    }
    .progress-text{
        text-align: center;
    }
</style>
