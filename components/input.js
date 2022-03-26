import styles from '../styles/input.module.css'

const InputComponent = ({name,label,type, ...otherProps})=>(
    <div>
<label for={name} className={styles.label}>{label}</label>
  <input id={name} type={type} {...otherProps} className={styles.input}/>
    </div>
)

export default InputComponent