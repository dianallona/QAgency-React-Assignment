import { useEffect, useState } from "react";
import { X } from "react-feather";
import { useNavigate, useParams } from "react-router-dom";
import uuid from "react-uuid";
import { Comment } from "../../components";
import useWrapperComponent from "../../hoc/useWrapperComponent";
import getCommentsByPost from "../../services/getCommentsByPost";
import getPostById from "../../services/getPostById";
import getUserById from "../../services/getUserById";
import {
  TApiResponseComments,
  TApiResponsePosts,
  TApiResponseUsers,
} from "../../services/types";

const Post = () => {
  useWrapperComponent("Post");
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState<TApiResponsePosts | undefined>(undefined);
  const [comments, setComments] = useState<TApiResponseComments[]>([]);
  const [user, setUser] = useState<TApiResponseUsers | undefined>(undefined);

  useEffect(() => {
    if (!id) return;
    getPostById(Number(id)).then((res) => {
      setPost(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (!post || !id) return;

    getCommentsByPost(Number(id)).then((res) => {
      setComments(res.data);
    });

    getUserById(Number(post.userId)).then((res) => {
      setUser(res.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  const handleCloseClick = () => {
    navigate({ pathname: "/posts" });
  };

  const renderHeader = (
    title?: TApiResponsePosts["title"],
    username?: TApiResponseUsers["name"]
  ) => (
    <div className="flex flex-row w-full">
      <img
        className="w-12 h-12 rounded-full mr-4"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_415642.png&f=1&nofb=1&ipt=9f3034e9db882c70e29b8141df4ea43a9885bb3829926e2d7c3ca767a18e7766&ipo=images"
        alt="Profile Placeholder"
      />
      <div className="flex flex-col">
        <h1 className="text-base font-medium text-black-russian">
          {title ?? ""}
        </h1>
        <p className="text-xs italic mt-1 text-paynes-grey">
          By: {username ?? ""}
        </p>
      </div>
    </div>
  );

  const renderBody = (body?: TApiResponsePosts["body"]) => (
    <div className="flex flex-col w-full break-words mt-8 text-paynes-grey">
      <div dangerouslySetInnerHTML={{ __html: body ?? "" }}></div>
    </div>
  );

  const renderComments = () => (
    <div className="flex flex-col w-full pt-8 mt-8 border-t border-ghost-white mb-8">
      <h1 className="mb-6 text-black-russian">Comments</h1>
      <div className="flex flex-col items-start space-y-6">
        {comments.map((comment) => (
          <Comment key={uuid()} body={comment.body} email={comment.email} />
        ))}
      </div>
    </div>
  );

  return (
    <div
      data-testid="post-container"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      <div className="md:bg-black/80 absolute z-[9997] top-0 left-0 w-full h-full">
        <div className="h-[calc(100%-40px)] mt-10 overflow-y-auto rounded-t-xl bg-white py-8 px-4">
          <div className="flex flex-col w-full m-auto max-w-6xl">
            <div className="flex flex-col w-full">
              {renderHeader(post?.title, user?.name)}
              {renderBody(post?.body)}
            </div>
            {renderComments()}
          </div>
        </div>
      </div>
      <button
        data-testid="backBtn"
        type="button"
        className="flex items-center justify-center absolute z-[9998] top-0 right-0 w-10 h-10 text-paynes-grey cursor-pointer"
        onClick={() => handleCloseClick()}
      >
        <X className="stroke-black md:stroke-white" size={24} />
      </button>
    </div>
  );
};

export default Post;
