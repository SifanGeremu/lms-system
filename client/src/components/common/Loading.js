import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Loading = ({ message = 'Loading...', fullScreen = false }) => {
    const content = (_jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [_jsx("div", { className: "inline-flex h-12 w-12 animate-spin rounded-full border-4 border-primary border-r-transparent" }), message && _jsx("p", { className: "text-muted-foreground", children: message })] }));
    if (fullScreen) {
        return _jsx("div", { className: "min-h-screen flex items-center justify-center", children: content });
    }
    return _jsx("div", { className: "flex items-center justify-center py-12", children: content });
};
export default Loading;
//# sourceMappingURL=Loading.js.map