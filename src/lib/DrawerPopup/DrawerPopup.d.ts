import { FC, ReactNode } from "react";
import './styles.scss';
export interface IDrawerPopup {
    children: ReactNode;
    title: string;
    isOpen: boolean;
    setIsOpen: () => void;
}
export declare const DrawerPopup: FC<IDrawerPopup>;
