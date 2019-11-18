import React from "react";
import Comment from "./Comment";

function PostItem({ data }) {
  return (
    <div key={data.id} className="post">
      <div className="autor">
        <img className="avatar" src={data.author.avatar} />
        <div className="dados">
          <span className="nome">{data.author.name}</span>
          <br />
          <span className="data">{data.date}</span>
        </div>
      </div>
      <p className="textoPost">{data.content}</p>
      <div className="comentarios">
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

export default PostItem;
