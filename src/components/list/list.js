import styles from "../headings/heading.module.css"
const ListComponent = () => {
    return(
    <ol>
        {/* <li className="head-text">Apple</li> */}
        <li className={styles.heading}>apple</li>
        <li  className={styles.heading}>Banana</li>
        <li >Mango</li>
        <li>Orange</li>
        </ol>
    )
}
export default ListComponent