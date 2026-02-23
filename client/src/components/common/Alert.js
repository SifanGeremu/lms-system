import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const alertVariants = cva('relative w-full rounded-lg border px-4 py-3 text-sm [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current', {
    variants: {
        variant: {
            default: 'bg-background text-foreground border-border',
            destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive bg-destructive/10',
            success: 'border-green-200 text-green-800 dark:border-green-800 dark:text-green-200 bg-green-50 dark:bg-green-900/20 [&>svg]:text-green-600 dark:bg-green-900/20',
            warning: 'border-yellow-200 text-yellow-800 dark:border-yellow-800 dark:text-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 [&>svg]:text-yellow-600',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (_jsx("div", { ref: ref, role: "alert", className: cn(alertVariants({ variant }), className), ...props })));
Alert.displayName = 'Alert';
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx("h5", { ref: ref, className: cn('mb-1 font-medium leading-tight', className), ...props })));
AlertTitle.displayName = 'AlertTitle';
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn('text-sm [&_p]:leading-relaxed', className), ...props })));
AlertDescription.displayName = 'AlertDescription';
export { Alert, AlertTitle, AlertDescription };
//# sourceMappingURL=Alert.js.map