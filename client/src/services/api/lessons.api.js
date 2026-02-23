import { http, unwrap } from '@/lib/http';
export const lessonsApi = {
    async list(moduleId) {
        const res = await http.get(`/modules/${moduleId}/lessons`);
        return unwrap(res.data);
    },
    async create(moduleId, payload) {
        const res = await http.post(`/modules/${moduleId}/lessons`, payload);
        return unwrap(res.data);
    },
    async update(lessonId, payload) {
        const res = await http.put(`/lessons/${lessonId}`, payload);
        return unwrap(res.data);
    },
    async remove(lessonId) {
        await http.delete(`/lessons/${lessonId}`);
    },
    async show(lessonId) {
        const res = await http.get(`/lessons/${lessonId}`);
        return unwrap(res.data);
    },
    async complete(lessonId) {
        const res = await http.patch(`/lessons/${lessonId}/complete`);
        return unwrap(res.data);
    },
};
//# sourceMappingURL=lessons.api.js.map