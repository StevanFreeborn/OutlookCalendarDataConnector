import { BsPlusCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <div>
        <Link
          className={styles.addSyncLink}
          to='/syncs/add'
        >
          <BsPlusCircle /> Add Sync
        </Link>
      </div>
      <div></div>
    </div>
  );
}
