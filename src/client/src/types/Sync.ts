export type Sync = {
  id: string;
  name: string;
  user: string;
  calendar: string;
  enabled: boolean;
  lastRun?: string;
  lastRunResult?: 'Succeeded' | 'Failed';
};
