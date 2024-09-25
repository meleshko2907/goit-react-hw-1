import clsx from "clsx";
import s from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.friendStack}>
        {friends.map((friend) => (
          <li className={s.friendCard} key={friend.id}>
            <picture className={s.imageWrapper}>
              <img
                className={s.image}
                src={friend.avatar}
                alt="Avatar"
                width="48"
              />
            </picture>
            <p className={s.name}>{friend.name}</p>
            <p
              className={clsx(friend.isOnline === true ? s.online : s.offline)}
            >
              {friend.isOnline ? "Online" : "Offline"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
