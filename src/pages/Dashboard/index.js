import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import Loading from "../../components/Loading";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);
  const { deleteDocument } = useDeleteDocument("posts");
  const [openModal, setOpenModal] = useState(false);
  const [idModal, setIdModal] = useState("");
  
  const handleDelete = (idModal, openModal) => { 
    deleteDocument(idModal);
    setOpenModal(openModal);
}

const handleOpenModal = (idModal, openModal) => { 
  setIdModal(idModal)
  setOpenModal(openModal);
}

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className={ `${styles.dashboard}  ${styles.fade}`}>
        <h2>Dashboard</h2>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Que pena, não foram encontrados posts... 😞</p>
            <Link to="/posts/create" className={`${styles.btn} btn`}>
              Criar primeiro post
            </Link>
          </div>
        ) : (
          <>
            <p>Gerencie os seus posts</p>
            <div className={styles.post_header}>
              <span>Título</span>
              <span>Ações</span>
            </div>

            {posts &&
              posts.map((post) => (
                <div key={post.id} className={styles.post_row}>
                  <p>{post.title}</p>
                  <div className={styles.post_controls}>
                    <Link to={`/posts/${post.id}`} className={`btn`}>
                      Ver
                    </Link>
                    <Link to={`/posts/edit/${post.id}`} className={`btn`}>
                      Editar
                    </Link>
                    <button
                      className={`btn`}
                      onClick={() => (
                        handleOpenModal(post.id,true)
                      )}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            <div
              className={
                openModal
                  ? `${styles.delete_modal}`
                  : `${styles.hidden_modal}`
              }
            >
              <p>Tem certeza que deseja deletar esse post? </p>
              <button className={`btn`} onClick={() => setOpenModal(false)}>
                Cancelar
              </button>
              <button
                className={`btn`}
                onClick={() => (handleDelete(idModal,false))}
              >
                Deletar
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default Dashboard;
