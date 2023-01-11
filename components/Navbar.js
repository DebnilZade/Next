import styles from './Navbar.module.css';
import { userService } from '../services';
function logout(e) {

    userService.logout();
  }
const Navbar = () => {
    return(
        <>
        <ul className={styles.list}>
            <li><a href="" className={styles.listItem}>Home</a></li>
            <li><a href="" className={styles.listItem}>News</a></li>
            <li><a href="" className={styles.listItem}>Contact</a></li>
            <li><a onClick={logout} className={styles.listItem}>Logout</a></li>
        </ul>
        <div></div>
        </>
    );
}

export default Navbar;