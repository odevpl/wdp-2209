import React from 'react';
import styles from './Register.module.scss';

const Register = () => {
  return (
    <div className='container'>
      <div className={styles.flexcontainer}>
        <div className={styles.smallercontainer}>
          <div className={styles.inputcontainer}>
            <div>
              <input type='radio' id='positive' name='positive' />
              <label htmlFor='positive'>Mam konto</label>
            </div>
            <div>
              <input type='radio' id='positive' name='negative' />
              <label htmlFor='negative'>Nie mam konta</label>
            </div>
          </div>
          <div className={styles.datacontainer}>
            <p>Podaj dane do rejestracji</p>
            <input type='text' placeholder='E-mail *' />
            <input type='text' placeholder='Hasło *' />
            <input type='text' placeholder='Powtórz hasło *' />
          </div>
          <div className={styles.toggleswitchcontainer}>
            <div className={styles.toggleswitch}>
              <div></div>
            </div>
            <p>Pokaż haslo</p>
          </div>
          <div className={styles.acceptscontainer}>
            <div>
              <label>
                <input type='checkbox' id='accept' name='accept' />
                <span>Zaznacz wszystkie</span>
              </label>
            </div>
            <div>
              <label>
                <input type='checkbox' id='terms' name='terms' />
                <span>
                  Akceptuje warunki <span>regulaminu</span>*
                </span>
              </label>
            </div>
            <div>
              <label>
                <input type='checkbox' id='terms' name='terms' />
                <span>Tak, Tak ! Chcę otrzymywać JEŻowy newsletter</span>
              </label>
            </div>
          </div>
          <div className={styles.backbuttoncontainer}>
            <p>&lt; Wróć</p>
            <button>Zarejestruj się </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
