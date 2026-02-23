import { http, unwrap } from '@/lib/http';
function normalizeUser(raw) {
    return {
        id: raw.id,
        name: raw.name,
        email: raw.email,
        roles: (raw.roles ?? ['student']),
    };
}
export const authApi = {
    async login(email, password) {
        const res = await http.post('/login', { email, password });
        const data = unwrap(res.data);
        return {
            token: data.token,
            user: normalizeUser(data.user),
        };
    },
    async register(name, email, password) {
        const res = await http.post('/register', {
            name,
            email,
            password,
            password_confirmation: password,
        });
        const data = unwrap(res.data);
        return {
            token: data.token,
            user: normalizeUser(data.user),
        };
    },
    async logout() {
        await http.post('/logout');
    },
    async me() {
        const res = await http.get('/user');
        const data = unwrap(res.data);
        return normalizeUser(data);
    },
};
//# sourceMappingURL=auth.api.js.map