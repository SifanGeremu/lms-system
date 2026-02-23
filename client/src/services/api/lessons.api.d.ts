import { CompleteLessonResult, LessonItem, LessonType } from '@/types';
export declare const lessonsApi: {
    list(moduleId: number): Promise<LessonItem[]>;
    create(moduleId: number, payload: {
        title: string;
        type: LessonType;
        content: string;
        description?: string;
        order?: number;
    }): Promise<LessonItem>;
    update(lessonId: number, payload: Partial<{
        title: string;
        type: LessonType;
        content: string;
        description?: string;
        order: number;
    }>): Promise<LessonItem>;
    remove(lessonId: number): Promise<void>;
    show(lessonId: number): Promise<LessonItem>;
    complete(lessonId: number): Promise<CompleteLessonResult>;
};
//# sourceMappingURL=lessons.api.d.ts.map