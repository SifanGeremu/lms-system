import { Role } from '@/types';
interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRoles?: Role[];
}
export default function ProtectedRoute({ children, requiredRoles }: ProtectedRouteProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ProtectedRoute.d.ts.map