import styles from './Navbar.module.css';
import { userService } from '../services';
function logout(e) {

    userService.logout();
  }
const Navbar = () => {
    return(
        <>
        <ul className={styles.list}>
            <li><a href="/" className={styles.listItem}>Home</a></li>
            <li><a href="/users" className={styles.listItem}>Users List</a></li>
           
            <li><a onClick={logout} className={styles.listItem}>Logout</a></li>
        </ul>
        <div className="test"></div>
        </>
    );
}

export default Navbar;