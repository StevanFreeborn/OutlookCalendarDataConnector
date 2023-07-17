import { HTMLInputTypeAttribute, useReducer } from 'react';
import { Sync } from '../types/Sync.ts';
import styles from './SyncForm.module.css';
import Toggle from './Toggle.tsx';

export default function SyncForm({ sync }: { sync?: Sync }) {
  const initialFormState = sync ? sync : new Sync();

  type FormAction = {
    type: 'updateValue';
    payload: {
      type: HTMLInputTypeAttribute;
      name: string;
      value: string;
    };
  };

  function formReducer(state: Sync, action: FormAction) {
    switch (action.type) {
      case 'updateValue': {
        const value = action.payload.value;
        return { ...state, [action.payload.name]: value };
      }
      default:
        return state;
    }
  }

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <div>
      <h1>Add Sync</h1>
      <form>
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
              onChange={e =>
                dispatch({
                  type: 'updateValue',
                  payload: {
                    type: e.target.type,
                    name: e.target.name,
                    value: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='onspringApp'>Onspring App</label>
            <input
              name='onspringApp'
              id='onspringApp'
              value={formState.onspringApp}
              className={styles.formControl}
              onChange={e =>
                dispatch({
                  type: 'updateValue',
                  payload: {
                    type: e.target.type,
                    name: e.target.name,
                    value: e.target.value,
                  },
                })
              }
              list='onspringApps'
            />
            {/* Need to populate this list dynamically when onspring api is changed */}
            <datalist id='onspringApps'>
              <option value='Appointments' />
            </datalist>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='enabled'></label>
            <Toggle
              id='enabled'
              name='enabled'
              checked={formState.enabled}
              onChangeHandler={e =>
                dispatch({
                  type: 'updateValue',
                  payload: {
                    type: e.target.type,
                    name: e.target.name,
                    value: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>
        <div></div>
      </form>
    </div>
  );
}
