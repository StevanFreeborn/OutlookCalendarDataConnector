import { ReactNode } from 'react';
import styles from './Layout.module.css';
import Sidebar from './Sidebar.tsx';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
