import React from 'react';

function ButtonLink() {
  // props => { className: "", href:""}
  return (
    <a href={props.href} className={props.className}>
      Novo vídeo
    </a>
  );
}

export default ButtonLink