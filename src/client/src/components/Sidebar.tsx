import { useState } from 'react';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={collapsed ? styles.sidebarCollapsed : styles.sidebar}>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          type='button'
        >
          {collapsed ? <BsArrowBarRight /> : <BsArrowBarLeft />}
        </button>
      </div>
      <nav className={collapsed ? styles.navCollapsed : styles.nav}>
        <ul className={styles.navItems}>
          <li>
            <Link to='/'>Syncs</Link>
          </li>
          <li>
            <Link to='settings'>Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
