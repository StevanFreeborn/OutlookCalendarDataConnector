export class Sync {
  id: string;
  name: string;
  user: string;
  calendar: string;
  enabled: boolean;
  lastRun?: string;
  lastRunResult?: 'Succeeded' | 'Failed';
  onspringApiKey: string;
  onspringApp: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.user = '';
    this.calendar = '';
    this.enabled = false;
    this.onspringApiKey = '';
    this.onspringApp = '';
  }
}
