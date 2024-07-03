import Post from './componentes/Post';
import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';

import * as styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alanolimpio.png',
      name: 'Alan Olimpio',
      role: 'Front end',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀',
      },
      {
        type: 'link',
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: 'jane.design/doctorcare',
      },
    ],
    tags: [
      {
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#novoprojeto',
      },
      {
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#nlw',
      },
      {
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#rocketseat',
      },
    ],
    publishedAt: new Date('2024-07-03 12:25:00'),
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: 'jane.design/doctorcare',
      },
    ],
    tags: [
      {
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#novoprojeto',
      },
      {
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#nlw',
      },
      {
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#rocketseat',
      },
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },
  ,
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                tags={post.tags}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
