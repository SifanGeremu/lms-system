import { http, unwrap } from '@/lib/http';
export const enrollmentApi = {
    async enroll(courseId) {
        const res = await http.post(`/courses/${courseId}/enroll`);
        return unwrap(res.data);
    },
    async status(courseId) {
        const res = await http.get(`/courses/${courseId}/enrollment`);
        return unwrap(res.data);
    },
};
//# sourceMappingURL=enrollment.api.js.map