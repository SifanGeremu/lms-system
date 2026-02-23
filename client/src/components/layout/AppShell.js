import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from "react/jsx-runtime";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/common/Button";
export default function AppShell({ children }) {
  const { isAuthenticated, user, hasRole, logout } = useAuth();
  return _jsxs("div", {
    className: "min-h-screen bg-background text-foreground",
    children: [
      _jsx("header", {
        className:
          "sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur",
        children: _jsxs("div", {
          className:
            "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
          children: [
            _jsxs(Link, {
              to: "/",
              className: "flex items-center gap-2",
              children: [
                _jsx("span", {
                  className:
                    "grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-bold",
                  children: "L",
                }),
                _jsx("span", {
                  className: "font-semibold tracking-tight",
                  children: "Learning Management System",
                }),
              ],
            }),
            _jsxs("nav", {
              className: "hidden items-center gap-5 text-sm md:flex",
              children: [
                _jsx(NavLink, {
                  to: "/courses",
                  className: ({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground",
                  children: "Courses",
                }),
                isAuthenticated &&
                  _jsx(NavLink, {
                    to: "/my-courses",
                    className: ({ isActive }) =>
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground",
                    children: "My Courses",
                  }),
                isAuthenticated &&
                  hasRole(["instructor", "admin"]) &&
                  _jsx(NavLink, {
                    to: "/instructor/drafts",
                    className: ({ isActive }) =>
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground",
                    children: "Instructor",
                  }),
                isAuthenticated &&
                  _jsx(NavLink, {
                    to: "/profile",
                    className: ({ isActive }) =>
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground",
                    children: "Profile",
                  }),
              ],
            }),
            _jsx("div", {
              className: "flex items-center gap-2",
              children: !isAuthenticated
                ? _jsxs(_Fragment, {
                    children: [
                      _jsx(Link, {
                        to: "/login",
                        children: _jsx(Button, {
                          variant: "ghost",
                          children: "Log in",
                        }),
                      }),
                      _jsx(Link, {
                        to: "/signup",
                        children: _jsx(Button, { children: "Get Started" }),
                      }),
                    ],
                  })
                : _jsxs(_Fragment, {
                    children: [
                      _jsx("span", {
                        className:
                          "hidden text-sm text-muted-foreground sm:inline",
                        children: user?.name,
                      }),
                      _jsx(Button, {
                        variant: "outline",
                        onClick: () => logout(),
                        children: "Logout",
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
      _jsx("main", { children: children }),
    ],
  });
}
//# sourceMappingURL=AppShell.js.map
