import styles from './contoh.module.css'


const ButtonCustom = () => {
    return(
        <>
        <button className={styles.btn}>Berubah</button>
        <button className={styles.btnSuccess}>Tetap</button>
        <button className='btn-sm'>Tetap 2</button>
        </>
    )
}

export default ButtonCustom