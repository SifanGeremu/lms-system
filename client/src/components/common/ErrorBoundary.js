import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import { Button } from './Button';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: _jsxs("div", { className: "text-center max-w-md", children: [_jsx("h1", { className: "text-4xl font-bold text-destructive mb-4", children: "Oops!" }), _jsx("p", { className: "text-foreground mb-2 font-semibold", children: "Something went wrong" }), _jsx("p", { className: "text-muted-foreground mb-6", children: this.state.error?.message || 'An unexpected error occurred. Please try refreshing the page.' }), _jsx(Button, { onClick: () => {
                                this.setState({ hasError: false, error: null });
                                window.location.reload();
                            }, children: "Refresh Page" })] }) }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map