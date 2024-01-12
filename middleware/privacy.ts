export default defineNuxtRouteMiddleware((to) => {
    const authStore = useAuthStore();
    const { id } = storeToRefs(authStore);
    if(unref(id) === null || unref(id) === undefined) return '/auth';
})
