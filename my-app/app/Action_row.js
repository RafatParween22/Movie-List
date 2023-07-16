import React, { useState } from 'react';
import Delete_button from './Delete_button.js';

const Action_row = ({onDelete}) => {
const [count, setCount] = useState(0);

const handleLikeDislike = (action) => {
    if (action ==='like') {
      setCount(count + 1);
  } else if (action === 'dislike' ) {
      setCount(count - 1);
    }
  };

  return (
    <div className="rating">
      <img src="Like.png"className="like"onClick={() => handleLikeDislike('like')}/>
      <p className="Count">{count}</p>
      <img src="Dislike.png" className="dislike"onClick={() => handleLikeDislike('dislike')}/>
      <Delete_button
      onDeleteButton={onDelete}
      />
      
    </div>
    
  );
};

export default Action_row;


