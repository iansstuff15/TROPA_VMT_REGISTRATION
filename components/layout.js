import Header from "./header _in_layout";
import styles from '../styles/layout.module.css'
const Layout = ({children}) => (
    <>
      <Header/>
    <div className={styles.container}> 
      
        {children}
    </div>
    </>
)
export default Layout