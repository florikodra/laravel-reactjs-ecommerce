import { InputHTMLAttributes } from "react"
import { Mode } from "@/types/mode";

export const Badge = ({ mode = 'primary', children, className = '', ...props }: { mode?: Mode } & InputHTMLAttributes<HTMLInputElement>) => {

    const modeClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        warning: 'bg-orange-600',
        danger: 'bg-red-600',
    }[mode];

    return (
        <div className={`absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white ${modeClasses} border-2 border-white rounded-full -top-2 -end-2 ${className}`}>
            {children}
        </div>
    )
}
