import React, { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from '../Avatar';
import styles from './Comment.module.css';

export function Comment({
  author,
  content,
  publishedAt,
  like,
  id,
  onDeleteComment,
}) {
  const [countLike, setCountLike] = useState(like);
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
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} alt={author.name} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button
              onClick={() => onDeleteComment(id)}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={() => setCountLike(countLike + 1)}>
            <ThumbsUp />
            Aplaudir {countLike > 0 && <span>{countLike}</span>}
          </button>
        </footer>
      </div>
    </div>
  );
}
