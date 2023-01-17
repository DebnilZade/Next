import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

import { Link } from './Link.js';

export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: true
};

function NavLink({ children, href, exact, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    
    if (isActive) {
        props.className += ' '+styles.active;
    }

    return <Link href={href} {...props}>{children}</Link>;
}