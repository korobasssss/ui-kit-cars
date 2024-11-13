import { FC, ReactNode } from "react";
export interface ILink {
    classNames?: string;
    url: string;
    children: ReactNode;
}
export declare const Link: FC<ILink>;
