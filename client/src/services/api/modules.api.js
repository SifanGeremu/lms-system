import { http, unwrap } from '@/lib/http';
export const modulesApi = {
    async list(courseId) {
        const res = await http.get(`/courses/${courseId}/modules`);
        return unwrap(res.data);
    },
    async create(courseId, payload) {
        const res = await http.post(`/courses/${courseId}/modules`, payload);
        return unwrap(res.data);
    },
    async update(moduleId, payload) {
        const res = await http.put(`/modules/${moduleId}`, payload);
        return unwrap(res.data);
    },
    async remove(moduleId) {
        await http.delete(`/modules/${moduleId}`);
    },
};
//# sourceMappingURL=modules.api.js.map