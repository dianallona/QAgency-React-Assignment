import { TApiResponseComments, TApiResponsePosts } from "./../services/types";

export interface TCardProps {
  imgUrl?: string;
  imgAlt?: string;
  title?: TApiResponsePosts["title"];
  description?: TApiResponsePosts["body"];
  userId?: number;
}

export interface TCommentProps {
  email?: TApiResponseComments["email"];
  body?: TApiResponsePosts["body"];
}

export interface TSearchProps {
  onClickSearch: (search: string) => void;
}
