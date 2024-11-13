import { FC, ReactNode, SetStateAction } from "react";
export interface IPopup {
    children: ReactNode;
    isModalOpen: boolean;
    handleClose: React.Dispatch<SetStateAction<boolean>>;
}
export declare const Popup: FC<IPopup>;
