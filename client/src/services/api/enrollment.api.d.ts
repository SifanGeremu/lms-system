import { Enrollment, EnrollmentStatus } from '@/types';
export declare const enrollmentApi: {
    enroll(courseId: number): Promise<Enrollment>;
    status(courseId: number): Promise<EnrollmentStatus>;
};
//# sourceMappingURL=enrollment.api.d.ts.map