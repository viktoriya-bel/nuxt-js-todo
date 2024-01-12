import { AuthService } from "~/services/auth.service";
import { AuthStoreInterface } from "~/interface/auth.interface";

const authService = AuthService;

export const useAuthStore = defineStore('auth', {
    state: () => ({
        id: null,
        token: null,
    }),
    getters: {
        getId: (state: AuthStoreInterface) => state.id,
    },
    actions: {
        async login(username: string, password: string) {
            const { id, token, message } = await authService.login(username, password);
            this.id = id;
            this.token = token;
            if (message)
                throw new Error("Произошла ошибка!");
        }
    }
});
