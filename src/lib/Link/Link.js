import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import cx from 'classnames';
import styles from './styles.module.scss';
export const Link = ({ classNames, url, children }) => {
    return (_jsx(NavLink, { to: url, className: cx(classNames, styles.SLink), children: children }));
};
