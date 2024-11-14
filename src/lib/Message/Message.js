import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import cx from 'classnames';
import styles from './styles.module.scss';
export const Message = ({ type = 'base', message }) => {
    const stylesMessage = useMemo(() => {
        return cx(styles.SMessage, styles[`SMessage_${type}`]);
    }, [type]);
    return (_jsx("p", { className: stylesMessage, children: message }));
};
