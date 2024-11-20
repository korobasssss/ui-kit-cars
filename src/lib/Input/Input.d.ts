import { FC, InputHTMLAttributes } from "react";
export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    classNames?: string;
    error?: string;
    errorTextShow?: boolean;
}
export declare const Input: FC<IInput>;
