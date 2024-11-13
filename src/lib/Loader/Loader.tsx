import { Spin } from "antd"
import { useMemo } from "react";
import { LoaderIcon } from "../../shared/assets/icons";
import styles from './styles.module.scss'

export const Loader = () => {

    const customIndicator = useMemo(() => {
        return (
            <img 
                src={LoaderIcon} 
                alt="Loading..." 
                className={styles.SIndicator} />
        )
    }, []);

    return (
        <div
            className={styles.SOverlay}
        >
            <Spin indicator={customIndicator}/>
        </div>
        
    )
}