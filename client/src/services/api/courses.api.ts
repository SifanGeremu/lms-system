import { http } from '@/lib/http'
import { CourseEdit, CourseListItem, CourseOverview, PaginatedResponse } from '@/types'

interface CoursesParams {
  search?: string
  category?: string | number
  page?: number
  perPage?: number
}

export const coursesApi = {
  async list(params: CoursesParams = {}): Promise<PaginatedResponse<CourseListItem>> {
    const res = await http.get('/courses', {
      params: {
        search: params.search,
        category: params.category,
        page: params.page,
        per_page: params.perPage,
      },
    })

    return res.data as PaginatedResponse<CourseListItem>
  },

  async show(slug: string): Promise<CourseOverview> {
    const res = await http.get(`/courses/${slug}`)
    return (res.data.data ?? res.data) as CourseOverview
  },

  async myCourses(page = 1, perPage = 10): Promise<PaginatedResponse<CourseListItem>> {
    const res = await http.get('/my-courses', { params: { page, per_page: perPage } })
    return res.data as PaginatedResponse<CourseListItem>
  },

  async myDrafts(): Promise<CourseEdit[]> {
    const res = await http.get('/courses/my-drafts')
    return ((res.data?.data ?? []) as CourseEdit[])
  },

  async create(payload: {
    title: string
    slug: string
    description?: string
    thumbnail?: string
    category_id: number
  }): Promise<CourseEdit> {
    const res = await http.post('/courses', payload)
    return (res.data.data ?? res.data) as CourseEdit
  },

  async edit(courseId: number): Promise<CourseEdit> {
    const res = await http.get(`/courses/${courseId}/edit`)
    return (res.data.data ?? res.data) as CourseEdit
  },

  async update(courseId: number, payload: {
    title: string
    slug: string
    description?: string
    thumbnail?: string
    category_id: number
  }): Promise<CourseEdit> {
    const res = await http.put(`/courses/${courseId}`, payload)
    return (res.data.data ?? res.data) as CourseEdit
  },

  async togglePublish(courseId: number): Promise<CourseEdit> {
    const res = await http.patch(`/courses/${courseId}/publish`)
    return (res.data.data ?? res.data) as CourseEdit
  },

  async remove(courseId: number): Promise<void> {
    await http.delete(`/courses/${courseId}`)
  },
}
