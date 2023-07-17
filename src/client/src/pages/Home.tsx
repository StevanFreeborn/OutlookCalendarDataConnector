import { BsPlusCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import SyncCard from '../components/SyncCard.tsx';
import { Sync } from '../types/Sync.ts';
import styles from './Home.module.css';

export default function Home() {
  // TODO: Fetch syncs from database
  const syncs: Sync[] = [
    {
      id: '6151c0f9f21ba63df8a5c12a',
      name: 'Test 1',
      user: 'Severus Snape',
      calendar: 'Calendar',
      enabled: true,
      lastRun: '2023-07-16T15:32:10.902Z',
      lastRunResult: 'Failed',
      onspringApiKey: 'test',
      onspringApp: 'test',
    },
    {
      id: '6151c0f9f21ba63df8a5c12b',
      name: 'Test 2',
      user: 'Albus Dumbledore',
      calendar: 'Calendar',
      enabled: false,
      lastRun: '',
      lastRunResult: undefined,
      onspringApiKey: 'test',
      onspringApp: 'test',
    },
    {
      id: '6151c0f9f21ba63df8a5c12c',
      name: 'Test 3',
      user: 'Harry Potter',
      calendar: 'Calendar',
      enabled: true,
      lastRun: '2023-07-10T15:32:10.902Z',
      lastRunResult: 'Succeeded',
      onspringApiKey: 'made up',
      onspringApp: '1',
    },
  ];

  return (
    <div className={styles.container}>
      <div>
        <Link
          title='Add Sync'
          className={styles.addSyncLink}
          to='/syncs/add'
        >
          <BsPlusCircle /> Add Sync
        </Link>
      </div>
      <div className={styles.syncContainer}>
        {syncs.map(sync => (
          <SyncCard
            key={sync.id}
            sync={sync}
          />
        ))}
      </div>
    </div>
  );
}
