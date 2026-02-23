import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

import Courses from '@/pages/Courses'
import CourseOverview from '@/pages/CourseOverview'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Profile from '@/pages/Profile'
import Landing from '@/pages/Landing'
import MyCourses from '@/pages/MyCourses'
import InstructorDrafts from '@/pages/InstructorDrafts'
import CourseEditor from '@/pages/CourseEditor'
import LessonViewer from '@/pages/LessonViewer'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseRef" element={<CourseOverview />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/my-courses"
          element={
            <ProtectedRoute>
              <MyCourses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/lessons/:lessonId"
          element={
            <ProtectedRoute>
              <LessonViewer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/instructor/drafts"
          element={
            <ProtectedRoute requiredRoles={['instructor', 'admin']}>
              <InstructorDrafts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructor/courses/new"
          element={
            <ProtectedRoute requiredRoles={['instructor', 'admin']}>
              <CourseEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructor/courses/:courseId/edit"
          element={
            <ProtectedRoute requiredRoles={['instructor', 'admin']}>
              <CourseEditor />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}
