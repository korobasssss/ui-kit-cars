import { FC, useState } from "react"
import styles from './styles.module.scss'
import { ButtonIcon } from "../ButtonIcon"
import { DeleteIcon } from "../../shared/assets/icons"

export interface IFileLoader {
    handleChange: (file?: File) => void
}

export const FileLoader: FC<IFileLoader> = (
    {
        handleChange,
    }
) => {
    const [currentImage, setCurrentImage] = useState<string | null>(null)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        handleChange(file)
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setCurrentImage(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = () => {
        setCurrentImage(null)
        handleChange(undefined)
    }

    if (currentImage) return (
        <div className={styles.SImageWrapper}>
            <img 
                src={currentImage} 
                alt="current image"
                className={styles.SImage}
            />
            <ButtonIcon 
                alt="delete"
                onClick={handleDeleteImage}
            >
                <img src={DeleteIcon} alt='delete'/>
            </ButtonIcon>
        </div>
    )

    return (
        <div className={styles.SFileWrapper}>
            <div className={styles.SFileTitle}>
                Выберите фото или перетащите сюда
            </div>
            <input 
                type="file" 
                name="f"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer'
                  }}
                onChange={handleImageChange}
            />
        </div>
    )
}