import styles from './HomePage.module.scss';
import Main from '../../sections/Main/Main';
const HomePage = () => {
  return (
    <>
      <main className={styles.main}>
        <Main />
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default HomePage;
