import { FC, ReactNode, SetStateAction } from "react";
import './styles.scss';
export interface IPopup {
    title: string;
    children: ReactNode;
    isModalOpen: boolean;
    handleClose: React.Dispatch<SetStateAction<boolean>>;
    isForceRender?: boolean;
}
export declare const Popup: FC<IPopup>;
