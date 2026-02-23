import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/common/Button";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user, hasRole, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-bold">
              
            </span>
            <span className="font-semibold tracking-tight">
              Learning Management System
            </span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm md:flex">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              Courses
            </NavLink>
            {isAuthenticated && (
              <NavLink
                to="/my-courses"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                My Courses
              </NavLink>
            )}
            {isAuthenticated && hasRole(["instructor", "admin"]) && (
              <NavLink
                to="/instructor/drafts"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                Instructor
              </NavLink>
            )}
            {isAuthenticated && (
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                Profile
              </NavLink>
            )}
          </nav>

          <div className="flex items-center gap-2">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <Button variant="ghost">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button>Get Started</Button>
                </Link>
              </>
            ) : (
              <>
                <span className="hidden text-sm text-muted-foreground sm:inline">
                  {user?.name}
                </span>
                <Button variant="outline" onClick={() => logout()}>
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
