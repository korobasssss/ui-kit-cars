import {FC} from 'react'
import { Spin } from "antd"
import { useMemo } from "react";
import { LoaderIcon } from "../../shared/assets/icons";
import styles from './styles.module.scss'
import cx from 'classnames'

export interface ILoaderSpin {
    size?: 'xs' | 's' | 'm'
}

export const LoaderSpin: FC<ILoaderSpin> = (
    {
        size = 'm'
    }
) => {
    const stylesIndicator = useMemo(() => cx(
        styles.SIndicator,
        styles[`SIndicator_${size}`]
    ), [size])

    const customIndicator = useMemo(() => {
        return (
            <img 
                src={LoaderIcon} 
                alt="Loading..." 
                className={stylesIndicator} />
        )
    }, []);

    return (
        <Spin indicator={customIndicator}/>
    )
}