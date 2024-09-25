import clsx from "clsx";
import s from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={s.friendCard}>
      <picture className={s.imageWrapper}>
        <img className={s.image} src={avatar} alt="Avatar" width="48" />
      </picture>
      <p className={s.name}>{name}</p>
      <p className={clsx(isOnline ? s.online : s.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );

  return (
    <div className={s.wrapper}>
      <ul className={s.friendStack}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
