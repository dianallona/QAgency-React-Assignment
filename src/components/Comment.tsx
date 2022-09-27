import { FC, HTMLAttributes } from "react";
import { TCommentProps } from "./types";

const Comment: FC<TCommentProps & HTMLAttributes<HTMLDivElement>> = ({
  email = "",
  body = "",
  ...others
}) => {
  return (
    <div {...others} className="flex flex-row">
      <img
        className="w-12 h-12 rounded-full mx-auto mr-4"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_415642.png&f=1&nofb=1&ipt=9f3034e9db882c70e29b8141df4ea43a9885bb3829926e2d7c3ca767a18e7766&ipo=images"
        alt="Profile Placeholder"
      />
      <div className="flex flex-col">
        <h1 className="text-sm font-medium text-black-russian mb-1">{email}</h1>
        <div className="flex flex-col w-full break-words text-sm text-paynes-grey">
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
