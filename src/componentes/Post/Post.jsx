import React, { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Avatar from '../Avatar';
import Comment from '../Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content, tags, comments, id }) {
  const [commentsList, setCommentsList] = useState(comments);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();
    const commentsTemp = commentsList[commentsList.length - 1];
    const newCommentsId = commentsTemp?.id ? parseInt(commentsTemp.id) + 1 : 1;
    if (parseInt(id) % 2 !== 0) {
      setCommentsList([
        ...commentsList,
        {
          id: `${newCommentsId}`,
          author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
          },
          content: newCommentText,
          publishedAt: new Date(),
          like: 0,
        },
      ]);
    } else {
      setCommentsList([
        ...commentsList,
        {
          id: `${newCommentsId}`,
          author: {
            avatarUrl: 'https://github.com/alanolimpio.png',
            name: 'Alan Olimpio',
          },
          content: newCommentText,
          publishedAt: new Date(),
          like: 0,
        },
      ]);
    }
    setNewCommentText('');
  }

  function handleNewComentChange(event) {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt={author.name} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index}>{item.content}</p>;
          }
          if (item.type === 'link') {
            return (
              <p key={index}>
                👉
                <a href={item.link} target="_blank">
                  {item.content}
                </a>
              </p>
            );
          }
        })}

        <p>
          {tags.map((item, index) => {
            return (
              <a key={index} href={item.link} target="_blank">
                {item.content}
              </a>
            );
          })}
        </p>
      </div>
      <form
        onSubmit={(e) => handleCreateNewComment(e)}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          onChange={(e) => handleNewComentChange(e)}
          placeholder="Deixe um comentário"
          value={newCommentText}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {commentsList.map((item) => {
          return (
            <Comment
              key={item.id}
              id={item.id}
              author={item.author}
              content={item.content}
              publishedAt={item.publishedAt}
              like={item.like}
            />
          );
        })}
      </div>
    </article>
  );
}
