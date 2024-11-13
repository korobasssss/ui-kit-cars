import { ButtonHTMLAttributes, FC, ReactNode } from "react";
export interface IButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string;
    children: ReactNode;
    alt: string;
}
export declare const ButtonIcon: FC<IButtonIcon>;
