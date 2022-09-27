import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Card, Search } from "../../components";
import { TSearchProps } from "../../components/types";
import withClassName from "../../hoc/withClassName";
import getAllPosts from "../../services/getAllPosts";
import { TApiResponsePosts } from "../../services/types";

const PostList: FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<TApiResponsePosts[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<TApiResponsePosts[]>([]);

  const fetchAllPosts = async () => {
    const res = await getAllPosts();

    if (!res) return;

    setPosts((res.data as TApiResponsePosts[]) ?? []);
    setSearchedPosts((res.data as TApiResponsePosts[]) ?? []);
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const onClickSearch: TSearchProps["onClickSearch"] = (search: string) => {
    if (!search || search === "" || search === " ") {
      setSearchedPosts(posts);
      return;
    }

    setSearchedPosts(
      [...posts].filter(
        (p) => p.title.includes(search.trim()) || p.body.includes(search.trim())
      )
    );
  };

  return (
    <div
      data-testid="postList"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8"
    >
      <Search data-testid="search" onClickSearch={onClickSearch} />
      <div
        data-testid="post-container"
        className="md:gap-8 columns-1 md:columns-3"
      >
        {searchedPosts.map((_posts) => (
          <div
            key={uuid()}
            className="flex justify-center w-full aspect-auto mb-6"
          >
            <Card
              data-testid="post"
              key={uuid()}
              title={_posts.title}
              description={_posts.body}
              imgUrl=""
              imgAlt=""
              userId={_posts.userId}
              onClick={() => {
                navigate({ pathname: `/post/${_posts.id}` });
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withClassName(PostList);
