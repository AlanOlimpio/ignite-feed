import Post from './componentes/Post';
import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';

import * as styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alan Olimpio"
            content="Lorem ipsum dolor sit consecttur adipisicing elit."
          />
          <Post
            author="Alan Olimpio"
            content="Lorem ipsum dolor sit consecttur adipisicing elit."
          />
        </main>
      </div>
    </div>
  );
}
