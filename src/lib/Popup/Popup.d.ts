import { FC, ReactNode, SetStateAction } from "react";
export interface IPopup {
    title: string;
    children: ReactNode;
    isModalOpen: boolean;
    handleClose: React.Dispatch<SetStateAction<boolean>>;
}
export declare const Popup: FC<IPopup>;
