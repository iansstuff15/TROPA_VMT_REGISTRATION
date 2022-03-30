import styles from '../styles/day_component.module.css'

const ActivityTile = ({name,...otherProps})=>{
  
  return(
    
<h3{...otherProps}>{name}</h3>

   
)}

export default ActivityTile