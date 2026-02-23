export { authApi, coursesApi, modulesApi, lessonsApi, enrollmentApi } from '@/services/api/index';
export declare const apiService: {
    login: (email: string, password: string) => Promise<import("../types").AuthResponse>;
    signup: (name: string, email: string, password: string) => Promise<import("../types").AuthResponse>;
    logout: () => Promise<void>;
    getCurrentUser: () => Promise<import("../types").User>;
    getCourses(page?: number): Promise<import("../types").CourseListItem[]>;
    getCourseById: (slug: string) => Promise<import("../types").CourseOverview>;
    enrollCourse(courseId: string): Promise<import("../types").Enrollment>;
    getLessonById(id: string): Promise<import("../types").LessonItem>;
};
//# sourceMappingURL=api.d.ts.map