import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.userCard}>
        <div className={s.hero}>
          <picture className={s.imageWrapper}>
            <img src={image} alt="User avatar" className={s.avatar} />
          </picture>
          <p className={s.name}>{name}</p>
          <p className={s.link}>{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.statWrapper}>
          <li className={s.data}>
            <span className={s.title}>Followers</span>
            <span className={s.statistics}>{stats.followers}</span>
          </li>
          <li className={s.data}>
            <span className={s.title}>Views</span>
            <span className={s.statistics}>{stats.views}</span>
          </li>
          <li className={s.data}>
            <span className={s.title}>Likes</span>
            <span className={s.statistics}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
