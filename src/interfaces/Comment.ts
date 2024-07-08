import { PostInterfaceProps } from "./Posts";

export interface CommentInterfaceProps {
  author: PostInterfaceProps["comments"][0]["author"];
  content: PostInterfaceProps["comments"][0]["content"];
  publishedAt: PostInterfaceProps["comments"][0]["publishedAt"];
  like: PostInterfaceProps["comments"][0]["like"];
  id: PostInterfaceProps["comments"][0]["id"];
  onDeleteComment: (id: PostInterfaceProps["comments"][0]["id"]) => void;
}
