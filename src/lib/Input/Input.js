import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import cx from 'classnames';
import styles from './styles.module.scss';
import { Message } from "../Message";
export const Input = ({ classNames, type, placeholder, value, error, errorTextShow = false, onChange, ...restProps }) => {
    const stylesInput = useMemo(() => cx(classNames, styles.SInput, {
        [styles['SInput_error']]: error
    }), [error]);
    return (_jsxs("div", { className: styles.SInputWrapper, children: [_jsx("input", { value: value, className: stylesInput, placeholder: placeholder, onChange: onChange, type: type, ...restProps }), error && errorTextShow && (_jsx(Message, { type: 'error', message: error }))] }));
};
