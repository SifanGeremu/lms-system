import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Courses from '@/pages/Courses';
import CourseOverview from '@/pages/CourseOverview';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Profile from '@/pages/Profile';
import MyCourses from '@/pages/MyCourses';
import InstructorDrafts from '@/pages/InstructorDrafts';
import CourseEditor from '@/pages/CourseEditor';
import LessonViewer from '@/pages/LessonViewer';
import NotFound from '@/pages/NotFound';
export default function App() {
    return (_jsx(AuthProvider, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/courses", replace: true }) }), _jsx(Route, { path: "/courses", element: _jsx(Courses, {}) }), _jsx(Route, { path: "/courses/:courseRef", element: _jsx(CourseOverview, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "/my-courses", element: _jsx(ProtectedRoute, { children: _jsx(MyCourses, {}) }) }), _jsx(Route, { path: "/profile", element: _jsx(ProtectedRoute, { children: _jsx(Profile, {}) }) }), _jsx(Route, { path: "/lessons/:lessonId", element: _jsx(ProtectedRoute, { children: _jsx(LessonViewer, {}) }) }), _jsx(Route, { path: "/instructor/drafts", element: _jsx(ProtectedRoute, { requiredRoles: ['instructor', 'admin'], children: _jsx(InstructorDrafts, {}) }) }), _jsx(Route, { path: "/instructor/courses/new", element: _jsx(ProtectedRoute, { requiredRoles: ['instructor', 'admin'], children: _jsx(CourseEditor, {}) }) }), _jsx(Route, { path: "/instructor/courses/:courseId/edit", element: _jsx(ProtectedRoute, { requiredRoles: ['instructor', 'admin'], children: _jsx(CourseEditor, {}) }) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }));
}
//# sourceMappingURL=App.js.map