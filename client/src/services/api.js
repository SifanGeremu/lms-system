export { authApi, coursesApi, modulesApi, lessonsApi, enrollmentApi } from '@/services/api/index';
import { authApi, coursesApi, enrollmentApi, lessonsApi } from '@/services/api/index';
export const apiService = {
    login: authApi.login,
    signup: authApi.register,
    logout: authApi.logout,
    getCurrentUser: authApi.me,
    async getCourses(page = 1) {
        const res = await coursesApi.list({ page });
        return res.data;
    },
    getCourseById: coursesApi.show,
    enrollCourse(courseId) {
        return enrollmentApi.enroll(Number(courseId));
    },
    getLessonById(id) {
        return lessonsApi.show(Number(id));
    },
};
//# sourceMappingURL=api.js.map