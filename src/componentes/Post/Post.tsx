import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Avatar from '../Avatar';
import Comment from '../Comment';
import Styled from './Post.module.css';
import {
  PostInterfaceProps,
  PostItemInterfaceProps,
} from '../../interfaces/Posts';

export function Post({ post }: PostItemInterfaceProps) {
  const [commentsList, setCommentsList] = useState(post.comments);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const commentsTemp = commentsList[commentsList.length - 1];
    const newCommentsId = commentsTemp?.id ? parseInt(commentsTemp.id) + 1 : 1;
    if (parseInt(post.id) % 2 !== 0) {
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

  function handleNewComentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: FormEvent<HTMLTextAreaElement>) {
    const eventTarget = event as InvalidEvent<HTMLTextAreaElement>;
    eventTarget.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleDeleteComment(
    commentId: PostInterfaceProps['comments'][0]['id'],
  ) {
    const commentsListTemp = commentsList.filter(
      (item) => item.id !== commentId,
    );
    setCommentsList(commentsListTemp);
  }

  return (
    <article className={Styled.post}>
      <header>
        <div className={Styled.author}>
          <Avatar src={post.author.avatarUrl} alt={post.author.name} />
          <div className={Styled.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={Styled.content}>
        {post.content.map((item, index) => {
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
          {post.tags.map((item, index) => {
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
        className={Styled.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={(e) => handleNewComentChange(e)}
          onInvalid={(e) => handleNewCommentInvalid(e)}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={Styled.commentList}>
        {commentsList.map((item) => {
          return (
            <Comment
              key={item.id}
              id={item.id}
              author={item.author}
              content={item.content}
              publishedAt={item.publishedAt}
              like={item.like}
              onDeleteComment={(id) => handleDeleteComment(id)}
            />
          );
        })}
      </div>
    </article>
  );
}
