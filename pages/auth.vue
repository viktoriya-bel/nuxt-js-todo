<template>
    <v-sheet
            :elevation="8"
            border
            rounded
    >
        <div class="login-block">
            <h1>Вход</h1>

            <v-form validate-on="submit lazy" @submit.prevent="submit">
                <v-text-field
                        v-model="userName"
                        :rules="[value => !!value || 'Required.']"
                        label="User name"
                ></v-text-field>
                <v-text-field
                        label="Password"
                        v-model="password"
                        type="password"
                        :rules="[value => !!value || 'Required.']"
                ></v-text-field>

                <v-btn
                        :loading="loading"
                        type="submit"
                        block
                        class="mt-2"
                        color="success"
                        text="Войти"
                        @click="login()"
                ></v-btn>
            </v-form>
        </div>
    </v-sheet>

</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import {useAuthStore} from "~/stores/auth.store";
    import { ref } from 'vue';

    let userName = ref("");
    let password = ref("");
    const router = useRouter();
    const authStore = useAuthStore();


    async function login() {
        if (userName.value.length && password.value.length){
            authStore.login(userName.value, password.value).then(() => {
                router.push('/');
            }).catch((error: string) => {
                alert(error);
            });

        }
    }
</script>

<style scoped>
    .v-sheet{
        max-width: 650px;
        margin: auto;
        margin-top: 50px;
    }
    .login-block{
        max-width: 600px;
        padding: 20px;
        margin: auto;
    }
    h1{
        text-align: center;
    }
</style>
