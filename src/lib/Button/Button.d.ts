import { ButtonHTMLAttributes, FC, ReactNode } from "react";
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string;
    children: ReactNode;
    theme: 'primary';
}
export declare const MyButton: FC<IButton>;
