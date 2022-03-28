import styles from '../styles/day_component.module.css'

const DayComponent = ({name,...otherProps})=>{
  
  return(
    
<h3{...otherProps}>{name}</h3>

   
)}

export default DayComponent