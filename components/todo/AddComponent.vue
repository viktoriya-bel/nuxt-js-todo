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
                        <v-btn type="submit" color="success" block class="mt-2" @click="$emit('clickAdd', newTodo)">Add new todo</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
</template>

<script setup lang="ts">
    /**
     * Text for creating a new to-do
     */
    let newTodo = '';
</script>

<style scoped>

</style>
