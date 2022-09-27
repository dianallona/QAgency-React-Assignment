import { FC, HTMLAttributes, useEffect, useState } from "react";
import getUserById from "../services/getUserById";
import { TApiResponseUsers } from "../services/types";
import { TCardProps } from "./types";

const Card: FC<TCardProps & HTMLAttributes<HTMLDivElement>> = ({
  imgUrl = "",
  imgAlt = "",
  title = "",
  description = "",
  userId,
  ...others
}) => {
  const [user, setUser] = useState<TApiResponseUsers | undefined>(undefined);

  useEffect(() => {
    getUserById(Number(userId)).then((res) => {
      setUser(res.data);
    });
  }, [userId]);

  return (
    <div
      {...others}
      className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-110 transition-all cursor-pointer border"
    >
      <img className="w-full" src={imgUrl} alt={imgAlt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black-russian">{title}</div>
        <p className="text-xs text-paynes-grey italic mb-2">
          By: {user?.email}
        </p>
        <p className="text-base text-paynes-grey">{description}</p>
      </div>
    </div>
  );
};

export default Card;
