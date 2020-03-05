export interface PostInterface {
  title: string;
  body: string;
  id: number;
}

export interface Posts {
  posts: PostInterface[];
}

export interface RequestApi {
  method: string;
  headers: HeadersInit;
  body: string;
  redirect: RequestRedirect;
}

export interface Props {
  children?: JSX.Element | JSX.Element[];
}
