import React, { useState } from "react";
import {SearchBarWrapper, Input,Button} from "./Styled";


const SearchBar = ({ onSearch }) => {
    const [userName, setUserName] = useState("");
    const onChangeHandle = e => {
      setUserName(e.target.value);
    }

    return (
      <SearchBarWrapper >
        <Input
          type="text"
          placeholder="typing username..."
          value={userName}
          onChange={onChangeHandle}
        />
        
        <Button type='submit' onClick={() => onSearch(userName)} >search</Button>
      </SearchBarWrapper>
    );
  };
  
  export default SearchBar;