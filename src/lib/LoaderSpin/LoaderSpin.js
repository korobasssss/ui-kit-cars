import { jsx as _jsx } from "react/jsx-runtime";
import { Spin } from "antd";
import { useMemo } from "react";
import { LoaderIcon } from "../../shared/assets/icons";
import styles from './styles.module.scss';
import cx from 'classnames';
export const LoaderSpin = ({ size = 'm' }) => {
    const stylesIndicator = useMemo(() => cx(styles.SIndicator, styles[`SIndicator_${size}`]), [size]);
    const customIndicator = useMemo(() => {
        return (_jsx("img", { src: LoaderIcon, alt: "Loading...", className: stylesIndicator }));
    }, []);
    return (_jsx(Spin, { indicator: customIndicator }));
};
