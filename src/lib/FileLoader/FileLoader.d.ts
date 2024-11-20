import { FC } from "react";
export interface IFileLoader {
    handleChange: (file?: File) => void;
    error?: string;
    errorTextShow?: boolean;
}
export declare const FileLoader: FC<IFileLoader>;
