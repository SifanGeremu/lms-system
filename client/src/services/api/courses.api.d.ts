import { CourseEdit, CourseListItem, CourseOverview, PaginatedResponse } from '@/types';
interface CoursesParams {
    search?: string;
    category?: string | number;
    page?: number;
    perPage?: number;
}
export declare const coursesApi: {
    list(params?: CoursesParams): Promise<PaginatedResponse<CourseListItem>>;
    show(slug: string): Promise<CourseOverview>;
    myCourses(page?: number, perPage?: number): Promise<PaginatedResponse<CourseListItem>>;
    myDrafts(): Promise<CourseEdit[]>;
    create(payload: {
        title: string;
        slug: string;
        description?: string;
        thumbnail?: string;
        category_id: number;
    }): Promise<CourseEdit>;
    edit(courseId: number): Promise<CourseEdit>;
    update(courseId: number, payload: {
        title: string;
        slug: string;
        description?: string;
        thumbnail?: string;
        category_id: number;
    }): Promise<CourseEdit>;
    togglePublish(courseId: number): Promise<CourseEdit>;
    remove(courseId: number): Promise<void>;
};
export {};
//# sourceMappingURL=courses.api.d.ts.map