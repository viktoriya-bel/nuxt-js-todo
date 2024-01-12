<template>
    <v-btn
            :class="[classString]"
            :color="colorString"
            :block="isBlock"
            @click="$emit('clickBtn')"
    >
        {{ text }}
        <slot></slot>
    </v-btn>
</template>

<script setup lang="ts">
    import {defineProps} from "@vue/runtime-core";

    const props = defineProps({
        text: {
            type: String,
            required: true,
            default: () => "",
        },
        classString: {
            type: String,
            required: true,
            default: () => "",
        },
        colorString: {
            type: String,
            required: true,
            default: () => "",
        },
        isBlock: {
            type: Boolean,
            required: true,
            default: () => false,
        },
    });
</script>

<style scoped>

</style>
