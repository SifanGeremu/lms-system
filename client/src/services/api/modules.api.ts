import { http, unwrap } from '@/lib/http'
import { ModuleItem } from '@/types'

export const modulesApi = {
  async list(courseId: number): Promise<ModuleItem[]> {
    const res = await http.get(`/courses/${courseId}/modules`)
    return unwrap<ModuleItem[]>(res.data)
  },

  async create(courseId: number, payload: {
    title: string
    description?: string
    order?: number
  }): Promise<ModuleItem> {
    const res = await http.post(`/courses/${courseId}/modules`, payload)
    return unwrap<ModuleItem>(res.data)
  },

  async update(moduleId: number, payload: {
    title: string
    description?: string
    order: number
  }): Promise<ModuleItem> {
    const res = await http.put(`/modules/${moduleId}`, payload)
    return unwrap<ModuleItem>(res.data)
  },

  async remove(moduleId: number): Promise<void> {
    await http.delete(`/modules/${moduleId}`)
  },
}
