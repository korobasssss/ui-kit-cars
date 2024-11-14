import { FC } from "react";
export interface IFileLoader {
    handleChange: (file?: File) => void;
    error?: string;
}
export declare const FileLoader: FC<IFileLoader>;
