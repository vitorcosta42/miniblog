import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";
// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
//components
import PostDetail from "../../components/PostDetail";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts} = useFetchDocuments("posts", search);
  return (
    <div>
      <h2>
        Posts com <u>'{search}'</u>{" "}
      </h2>

      <div className={`${styles.notfound}`}>
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </>
        )}
      </div>
      <div className={styles.search_container}>
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
