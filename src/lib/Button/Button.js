import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import cx from 'classnames';
import styles from './styles.module.scss';
import { LoaderSpin } from "../LoaderSpin";
export const MyButton = ({ classNames, theme = 'primary', type, children, disabled, onClick, isLoading }) => {
    const stylesButton = useMemo(() => cx(classNames, styles.SButton, styles[`SButton_${theme}`]), [theme]);
    return (_jsx("button", { className: stylesButton, type: type, onClick: onClick, disabled: disabled, children: isLoading ?
            _jsx(LoaderSpin, { size: "xs" })
            :
                _jsx("span", { children: children }) }));
};
