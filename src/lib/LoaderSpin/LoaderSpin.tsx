import { Spin } from "antd"
import { useMemo } from "react";
import { LoaderIcon } from "../../shared/assets/icons";
import styles from './styles.module.scss'

export const LoaderSpin = () => {
    const customIndicator = useMemo(() => {
        return (
            <img 
                src={LoaderIcon} 
                alt="Loading..." 
                className={styles.SIndicator} />
        )
    }, []);

    return (
        <Spin indicator={customIndicator}/>
    )
}