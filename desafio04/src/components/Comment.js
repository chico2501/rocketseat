import React from "react";

function Comment({ data }) {
  return (
    <div className="comentario" key={data.id}>
      <img className="avatarComment" src={data.author.avatar} />
      <div className="textoComment">
        <strong className="autorComment">{data.author.name} </strong>
        {data.content}
      </div>
    </div>
  );
}

export default Comment;
