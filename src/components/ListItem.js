import React from "react";
import {ListInfo,Date} from "./Styled";


const ListItem = ({ repo }) => {
  return (
    <ListInfo >
      <div >
        <a href={repo.url} target="_blank" >
          {repo.name}
        </a> 
        <p> {repo.description}</p>
        <Date>Updated at: {repo.updatedAt}</Date>
      </div>
      
    </ListInfo>
  );
};

export default ListItem;
