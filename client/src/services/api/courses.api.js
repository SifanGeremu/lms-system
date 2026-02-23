import { http } from '@/lib/http';
export const coursesApi = {
    async list(params = {}) {
        const res = await http.get('/courses', {
            params: {
                search: params.search,
                category: params.category,
                page: params.page,
                per_page: params.perPage,
            },
        });
        return res.data;
    },
    async show(slug) {
        const res = await http.get(`/courses/${slug}`);
        return (res.data.data ?? res.data);
    },
    async myCourses(page = 1, perPage = 10) {
        const res = await http.get('/my-courses', { params: { page, per_page: perPage } });
        return res.data;
    },
    async myDrafts() {
        const res = await http.get('/courses/my-drafts');
        return (res.data?.data ?? []);
    },
    async create(payload) {
        const res = await http.post('/courses', payload);
        return (res.data.data ?? res.data);
    },
    async edit(courseId) {
        const res = await http.get(`/courses/${courseId}/edit`);
        return (res.data.data ?? res.data);
    },
    async update(courseId, payload) {
        const res = await http.put(`/courses/${courseId}`, payload);
        return (res.data.data ?? res.data);
    },
    async togglePublish(courseId) {
        const res = await http.patch(`/courses/${courseId}/publish`);
        return (res.data.data ?? res.data);
    },
    async remove(courseId) {
        await http.delete(`/courses/${courseId}`);
    },
};
//# sourceMappingURL=courses.api.js.map