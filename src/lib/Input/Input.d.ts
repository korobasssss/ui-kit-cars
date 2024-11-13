import { FC, InputHTMLAttributes } from "react";
export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    classNames?: string;
    error?: string;
}
export declare const Input: FC<IInput>;
