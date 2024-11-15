import { ButtonHTMLAttributes, FC, ReactNode } from "react";
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string;
    children: ReactNode;
    theme: 'primary' | 'danger' | 'none';
}
export declare const MyButton: FC<IButton>;
