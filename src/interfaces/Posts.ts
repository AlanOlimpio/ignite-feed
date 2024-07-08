export type contentTypeProps = 'paragraph' | 'link';
export interface PostInterfaceProps {
  id: string;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: contentTypeProps;
    content: string;
    link?: string;
  }[];
  tags: {
    id: string;
    link: string;
    content: string;
  }[];

  comments: {
    id: string;
    author: {
      avatarUrl: string;
      name: string;
    };
    content: string;
    publishedAt: Date;
    like: number;
  }[];
  publishedAt: Date;
}

export interface PostItemInterfaceProps {
  post: PostInterfaceProps;
}
