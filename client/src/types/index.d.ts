export type Role = 'admin' | 'instructor' | 'student';
export interface ApiEnvelope<T> {
    success?: boolean;
    message?: string;
    data: T;
    errors?: Record<string, string[]>;
}
export interface PaginatedMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
export interface PaginatedResponse<T> {
    data: T[];
    meta: PaginatedMeta;
}
export interface User {
    id: number;
    name: string;
    email: string;
    roles: Role[];
    bio?: string | null;
    avatar_url?: string | null;
}
export interface AuthResponse {
    token: string;
    user: User;
}
export interface Category {
    id: number;
    name: string;
    slug: string;
}
export interface CourseListItem {
    id: number;
    title: string;
    slug: string;
    thumbnail?: string | null;
    published_at?: string | null;
    category?: Category | null;
    instructor?: {
        id: number;
        name: string;
    } | null;
}
export interface CourseOverview {
    title: string;
    slug: string;
    description?: string | null;
    thumbnail?: string | null;
    published_at?: string | null;
    category?: Category | null;
    instructor?: {
        id: number;
        name: string;
        email?: string;
    } | null;
}
export interface CourseEdit {
    id: number;
    title: string;
    description?: string | null;
    slug: string;
    thumbnail?: string | null;
    category_id: number;
    instructor_id: number;
    published_at?: string | null;
}
export interface Enrollment {
    id: number;
    course_id: number;
    user_id: number;
    enrolled_at: string;
    progress_percentage: number;
    completed_at?: string | null;
}
export interface EnrollmentStatus {
    status: 'enrolled' | 'not_enrolled';
    progress_percentage: number;
    completed_at?: string | null;
}
export interface ModuleItem {
    id: number;
    course_id: number;
    title: string;
    description?: string | null;
    order: number;
    lesson_count?: number;
}
export type LessonType = 'text' | 'video' | 'file' | 'embed';
export interface LessonItem {
    id: number;
    module_id: number;
    title: string;
    order: number;
    type: LessonType;
    content: string;
    description?: string | null;
}
export interface CompleteLessonResult {
    lesson_id: number;
    progress_percentage: number;
    completed_at?: string | null;
}
//# sourceMappingURL=index.d.ts.map