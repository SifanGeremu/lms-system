import { ModuleItem } from '@/types';
export declare const modulesApi: {
    list(courseId: number): Promise<ModuleItem[]>;
    create(courseId: number, payload: {
        title: string;
        description?: string;
        order?: number;
    }): Promise<ModuleItem>;
    update(moduleId: number, payload: {
        title: string;
        description?: string;
        order: number;
    }): Promise<ModuleItem>;
    remove(moduleId: number): Promise<void>;
};
//# sourceMappingURL=modules.api.d.ts.map