import React, { ReactElement } from "react";


export interface ButtonProps {
    variant : "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text : string;
    startIcon? : ReactElement;
    endIcon? : ReactElement;
    onClick : () => void;
}

const defaultStyle = 'rounded-md flex items-center justify-center';

const sizeStyle = {
    "sm" : "py-2 px-4 gap-2",
    "md" : "py-2 px-6 gap-2",
    "lg" : "py-4 px-8 gap-4"
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-600"
}

export const Button = (props : ButtonProps) => {
    const StartIcon = props.startIcon
    ? React.cloneElement(props.startIcon, { size: props.size })
    : null;
    const EndIcon = props.endIcon
    ? React.cloneElement(props.endIcon, { size: props.size })
    : null;

    return <button className={`
    ${defaultStyle} 
    ${variantStyles[props.variant]} 
    ${sizeStyle[props.size]} 

    `}>
        {StartIcon}
        {props.text}
        {EndIcon}
    </button>
}