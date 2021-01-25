import React from "react";

import ListItem from "./ListItem";
import ErrorHandler from "./ErrorHandler";
import {ListWrapper, Button, Total} from "./Styled";

const List = ({ data,total, user, more, hasNextPage }) => {
  return (
    <ListWrapper >
      {data.length === 0 ? (
        <ErrorHandler error="No repositories found"></ErrorHandler>
      ) : (
        <div>
          <Total>There are {total} repositories from "{user}"</Total>
          {data.map((repo, index) => (
            <ListItem key={index} repo={repo.node} />
          ))}
          {hasNextPage && (     
              <Button type="submit" onClick={() => more()} >Next</Button>  
          )}  
        </div>
      )}
    </ListWrapper>
  );
};

export default List;
