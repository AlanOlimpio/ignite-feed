import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from '../Avatar';
import Styled from './Comment.module.css';
import { CommentInterfaceProps } from '../../interfaces/Comment';

export function Comment({
  author,
  content,
  publishedAt,
  like,
  id,
  onDeleteComment,
}: CommentInterfaceProps) {
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

  function handleLikeComment() {
    setCountLike((state) => {
      return state + 1;
    });
  }

  return (
    <div className={Styled.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} alt={author.name} />
      <div className={Styled.commentBox}>
        <div className={Styled.commentContent}>
          <header>
            <div className={Styled.authorAndTime}>
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
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir {countLike > 0 && <span>{countLike}</span>}
          </button>
        </footer>
      </div>
    </div>
  );
}
