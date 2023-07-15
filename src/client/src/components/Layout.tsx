import { ReactNode, useState } from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import styles from './Layout.module.css';
import Sidebar from './Sidebar.tsx';

export default function Layout({ children }: { children: ReactNode }) {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.showSidebarButtonContainer}>
        <button
          onClick={() => setHideSidebar(!hideSidebar)}
          type='button'
        >
          <BsArrowBarRight />
        </button>
      </div>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
