import styles from './Navbar.module.css';
import { userService } from '../services';
import { NavLink } from './NavLink.js';
function logout(e) {

    userService.logout();
  }
const Navbar = () => {
    return(
        <>
        <ul className={styles.list}>
            <li><NavLink href="/" className={styles.listItem}>Home</NavLink></li>
            <li><NavLink href="/users" className={styles.listItem}>Users List</NavLink></li>
            <li><NavLink href="/tasks" className={styles.listItem}>Tasks List</NavLink></li>
            <li><NavLink href="/clients" className={styles.listItem}>Clients List</NavLink></li>
           
            <li><a onClick={logout} className={styles.listItem}>Logout</a></li>
        </ul>
        <div className="test"></div>
        </>
    );
}

export default Navbar;