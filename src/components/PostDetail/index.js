import { Link } from "react-router-dom";
import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />

      <div className={styles.post_title}>
        <h2>{post.title}</h2>
        <p className={styles.createdBy}>posted by {post.createdBy}</p>
      </div>
      <p className={styles.description}>{post.body}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className={`${styles.btn} btn`}>
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
