import { FC } from "react";
export interface IFileLoader {
    handleChange: (file?: File) => void;
}
export declare const FileLoader: FC<IFileLoader>;
