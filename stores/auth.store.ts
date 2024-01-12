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
        /**
         * User authorization
         * @param username {string}
         * @param password {string}
         */
        async login(username: string, password: string) {
            const { id, token, message } = await authService.login(username, password);
            if (message)
                throw new Error("Произошла ошибка!");
            this.id = id;
            this.token = token;
        }
    }
});
