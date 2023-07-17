import { ChangeEvent } from 'react';
import styles from './Toggle.module.css';

type ToggleProps = {
  id: string;
  name: string;
  checked: boolean;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Toggle({
  id,
  name,
  checked,
  onChangeHandler,
}: ToggleProps) {
  return (
    <label
      htmlFor={id}
      className={styles.switch}
    >
      <input
        id={id}
        name={name}
        checked={checked}
        value={checked.toString()}
        type='checkbox'
        onChange={onChangeHandler}
      />
      <span className={styles.slider}></span>
      <span className={styles.switchLabel}>
        {checked ? 'Enabled' : 'Disabled'}
      </span>
    </label>
  );
}
