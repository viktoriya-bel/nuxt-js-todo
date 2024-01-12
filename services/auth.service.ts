
export class AuthService {
    static async login(username: string, password: string): Promise<{ id: number; token: string; message: string }> {
        const result = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            })
        });
        return await result.json();
    }
}
