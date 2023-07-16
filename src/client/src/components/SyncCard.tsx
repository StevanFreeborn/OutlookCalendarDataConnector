import { BsList, BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Sync } from '../types/Sync.ts';
import styles from './SyncCard.module.css';

export default function SyncCard({ sync }: { sync: Sync }) {
  const lastRun = sync.lastRun
    ? new Date(sync.lastRun).toLocaleString()
    : 'Not run';

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardStatusContainer}>
          <div className={styles.cardName}>{sync.name}</div>
          <div
            className={sync.enabled ? styles.enabled : styles.disabled}
          ></div>
        </div>
        <div className={styles.actionContainer}>
          <Link
            title='View Sync Logs'
            className={styles.logLink}
            to={`syncs/${sync.id}/logs`}
          >
            <BsList />
          </Link>
          <Link
            title='Edit Sync'
            className={styles.editLink}
            to={`syncs/${sync.id}/edit`}
          >
            <BsPencilSquare />
          </Link>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div>{`${sync.user} - ${sync.calendar}`}</div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.lastRunContainer}>
          <div>{lastRun}</div>
          {sync.lastRunResult ? (
            <>
              <div> - </div>
              <div
                className={
                  sync.lastRunResult === 'Succeeded'
                    ? styles.success
                    : styles.failure
                }
              >{`${sync.lastRunResult}`}</div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
