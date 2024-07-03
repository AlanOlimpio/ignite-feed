import React from 'react';
import Avatar from '../Avatar';
import Comment from '../Comment';
import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/alanolimpio.png" alt="Alan Olimpio" />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.content}</span>
          </div>
        </div>

        <time title="2 de Maio às 08:13h" dateTime="2024-07-2 08:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Feed
          🚀
        </p>
        <p>
          👉<a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
