import { jsx as _jsx } from "react/jsx-runtime";
import { Drawer } from "antd";
import './styles.scss';
export const DrawerPopup = ({ children, title, isOpen, setIsOpen }) => {
    return (_jsx(Drawer, { placement: "right", onClose: setIsOpen, open: isOpen, title: title, closable: true, children: children }));
};
