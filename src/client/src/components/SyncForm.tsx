import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useReducer,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { Sync } from '../types/Sync.ts';
import styles from './SyncForm.module.css';
import Toggle from './Toggle.tsx';

type App = {
  id: string;
  name: string;
};

export default function SyncForm({ sync }: { sync?: Sync }) {
  const [apps, setApps] = useState<App[]>([]);
  const initialFormState = sync ? sync : new Sync();

  type FormAction = {
    type: 'updateValue';
    payload: {
      name: string;
      value: string | boolean;
    };
  };

  function formReducer(state: Sync, action: FormAction) {
    switch (action.type) {
      case 'updateValue':
        return { ...state, [action.payload.name]: action.payload.value };
      default:
        return state;
    }
  }

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    let value: string | boolean = e.target.value;

    if (e.target.type == 'checkbox') {
      value = e.target.checked;
    }

    dispatch({
      type: 'updateValue',
      payload: { name: e.target.name, value: value },
    });
  }

  function handleOnspringApiKeyBlur(e: FocusEvent<HTMLInputElement>) {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL as string}/api/apps?apiKey=${
        e.target.value
      }`
    )
      .then(res => res.json())
      .then(apps => setApps(apps as App[]))
      .catch(err => console.error(err));
    e;
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_BASE_URL as string}/api/syncs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.formContainer}>
      <h1>Add Sync</h1>
      <form
        className={styles.syncForm}
        onSubmit={handleFormSubmit}
      >
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label
              className={styles.formLabel}
              htmlFor='enabled'
            >
              Status
            </label>
            <div className={styles.toggleContainer}>
              <Toggle
                id='enabled'
                name='enabled'
                checked={formState.enabled}
                onChangeHandler={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label
              className={styles.formLabel}
              htmlFor='onspringApiKey'
            >
              Onspring API Key
            </label>
            <input
              type='text'
              name='onspringApiKey'
              id='onspringApiKey'
              value={formState.onspringApiKey}
              className={styles.formControl}
              onChange={handleInputChange}
              onBlur={handleOnspringApiKeyBlur}
            />
          </div>
          <div className={styles.formGroup}>
            <label
              htmlFor='onspringApp'
              className={styles.formLabel}
            >
              Onspring App
            </label>
            <input
              name='onspringApp'
              id='onspringApp'
              value={formState.onspringApp}
              className={styles.formControl}
              onChange={handleInputChange}
              list='onspringApps'
            />
            {/* TODO: Need to populate this list dynamically when onspring api is changed */}
            <datalist id='onspringApps'>
              {apps.map(app => (
                <option
                  key={app.id}
                  value={app.name}
                />
              ))}
            </datalist>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label
              className={styles.formLabel}
              htmlFor='msClientId'
            >
              Microsoft Client Id
            </label>
            <input
              type='text'
              name='msClientId'
              id='msClientId'
              value={formState.msClientId}
              className={styles.formControl}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label
              className={styles.formLabel}
              htmlFor='msClientSecret'
            >
              Microsoft Client Secret
            </label>
            <input
              type='text'
              name='msClientSecret'
              id='msClientSecret'
              value={formState.msClientSecret}
              className={styles.formControl}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label
              htmlFor='msUser'
              className={styles.formLabel}
            >
              Microsoft User
            </label>
            <input
              name='msUser'
              id='msUser'
              value={formState.msUser}
              className={styles.formControl}
              onChange={handleInputChange}
              list='msUsers'
            />
            {/* TODO: Need to populate this list dynamically when microsoft client id or client secret is changed */}
            <datalist id='msUsers'>
              <option value='Stevan Freeborn' />
            </datalist>
          </div>
          <div className={styles.formGroup}>
            <label
              htmlFor='msUserCalendar'
              className={styles.formLabel}
            >
              User Calendar
            </label>
            <input
              name='msUserCalendar'
              id='msUserCalendar'
              value={formState.msUser}
              className={styles.formControl}
              onChange={handleInputChange}
              list='msUserCalendars'
            />
            {/* TODO: Need to populate this list dynamically when microsoft user is changed */}
            <datalist id='msUserCalendars'>
              <option value='Default' />
            </datalist>
          </div>
        </div>
        <div className={styles.fieldMappingsRow}>
          <div className={styles.fieldMappingGroup}>
            <div className={styles.formLabel}>Field Mappings</div>
            <div className={styles.fieldMappingContainer}></div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link
            className={styles.closeLink}
            to='/'
          >
            {sync ? 'Close' : 'Cancel'}
          </Link>
          <button
            className={styles.saveButton}
            type='submit'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
