import { http, unwrap } from '@/lib/http'
import { Enrollment, EnrollmentStatus } from '@/types'

export const enrollmentApi = {
  async enroll(courseId: number): Promise<Enrollment> {
    const res = await http.post(`/courses/${courseId}/enroll`)
    return unwrap<Enrollment>(res.data)
  },

  async status(courseId: number): Promise<EnrollmentStatus> {
    const res = await http.get(`/courses/${courseId}/enrollment`)
    return unwrap<EnrollmentStatus>(res.data)
  },
}
