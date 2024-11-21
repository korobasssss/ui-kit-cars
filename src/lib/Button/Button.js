import { jsx as _jsx } from "react/jsx-runtime";
import cx from 'classnames';
import styles from './styles.module.scss';
import { LoaderSpin } from "../LoaderSpin";
export const MyButton = ({ classNames, theme = 'primary', type, children, disabled, onClick, isLoading }) => {
    return (_jsx("button", { className: cx(classNames, styles.SButton, styles[`SButton_${theme}`]), type: type, onClick: onClick, disabled: disabled, children: isLoading ?
            _jsx(LoaderSpin, { size: "xs" })
            :
                _jsx("span", { children: children }) }));
};
