import { http, unwrap } from '@/lib/http'
import { CompleteLessonResult, LessonItem, LessonType } from '@/types'

export const lessonsApi = {
  async list(moduleId: number): Promise<LessonItem[]> {
    const res = await http.get(`/modules/${moduleId}/lessons`)
    return unwrap<LessonItem[]>(res.data)
  },

  async create(moduleId: number, payload: {
    title: string
    type: LessonType
    content: string
    description?: string
    order?: number
  }): Promise<LessonItem> {
    const res = await http.post(`/modules/${moduleId}/lessons`, payload)
    return unwrap<LessonItem>(res.data)
  },

  async update(lessonId: number, payload: Partial<{
    title: string
    type: LessonType
    content: string
    description?: string
    order: number
  }>): Promise<LessonItem> {
    const res = await http.put(`/lessons/${lessonId}`, payload)
    return unwrap<LessonItem>(res.data)
  },

  async remove(lessonId: number): Promise<void> {
    await http.delete(`/lessons/${lessonId}`)
  },

  async show(lessonId: number): Promise<LessonItem> {
    const res = await http.get(`/lessons/${lessonId}`)
    return unwrap<LessonItem>(res.data)
  },

  async complete(lessonId: number): Promise<CompleteLessonResult> {
    const res = await http.patch(`/lessons/${lessonId}/complete`)
    return unwrap<CompleteLessonResult>(res.data)
  },
}
