import Post from './componentes/Post';
import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';

import styles from './App.module.css';

import './global.css';
import { PostInterfaceProps } from './interfaces/Posts';

const sidebar = {
  author: {
    avatarUrl: 'https://github.com/alanolimpio.png',
    name: 'Alan Olimpio',
    role: 'Front end',
  },
};
const posts: PostInterfaceProps[] = [
  {
    id: '1',
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
        id: '1',
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#novoprojeto',
      },
      {
        id: '2',
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#nlw',
      },
      {
        id: '3',
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#rocketseat',
      },
    ],
    comments: [
      {
        id: '1',
        author: {
          avatarUrl: 'https://github.com/diego3g.png',
          name: 'Diego Fernandes',
        },
        content: 'Muito bom Alan Olimpio, parabéns!! 👏👏',
        publishedAt: new Date('2024-07-03 12:25:00'),
        like: 1,
      },
    ],
    publishedAt: new Date('2024-07-03 12:25:00'),
  },
  {
    id: '2',
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
        id: '4',
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#novoprojeto',
      },
      {
        id: '5',
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#nlw',
      },
      {
        id: '6',
        link: 'https://github.com/AlanOlimpio/ignitefeed',
        content: '#rocketseat',
      },
    ],
    comments: [],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar author={sidebar.author} />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
