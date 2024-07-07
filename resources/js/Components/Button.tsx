import React from 'react';
import { Mode } from '@/types/mode';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    mode?: Mode;
    leftIcon?: any;
    rightIcon?: any;
}

const Button = ({
    title = '',
    mode = 'primary',
    children,
    className,
    type = 'button',
    ...props
}: ButtonProps) => {

    const btnModeClass = {
        primary: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300',
        secondary: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-300',
        success: 'bg-green-500 hover:bg-green-600 focus:ring-green-300',
        warning: 'bg-orange-500 hover:bg-orange-600 focus:ring-orange-300',
        danger: 'bg-red-500 hover:bg-red-600 focus:ring-red-300',
    }[mode];

    return (
        <button
            className={`relative flex gap-2 flex items-center text-white ${btnModeClass} font-medium rounded-lg text-sm px-3 py-2 focus:outline-none ${className}`}
            type={type}
            {...props}
        >
            {title || children || ''}
            {/* <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-orange-600 border-2 border-white rounded-full -top-2 -end-2">0</div> */}
        </button>
    );
};

export default Button;
