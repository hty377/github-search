import React, { useState } from "react";

import { gql, useQuery } from "@apollo/client";

import List from "./List";
import SearchBar from "./SearchBar";
import ErrorHandler from "./ErrorHandler";

const GET_LIST = gql`
  query($username: String! $cursor: String ) {
    user( login: $username) {
      repositories(first: 20, after: $cursor) {
        totalCount
        edges{
          node {
            ... on Repository {
              name
              url
              description
              updatedAt
            }
          }  
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

const SearchPage = () => {
  const [userName, setUserName] = useState("");
  const { data, fetchMore } = useQuery(GET_LIST, {
    variables: { username: userName },
  });

  const handleSearch = (str) => {
    setUserName(str);
    fetchMore({
      variables: {
        username: str,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

  const handleMore = () => {
    fetchMore({
      variables: {
        username: userName,
        cursor: data.user.repositories.pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({},prev,{...fetchMoreResult})
      },
    });
  };


  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {data  && 
        <List
          data={data.user.repositories.edges}
          total={data.user.repositories.totalCount}
          user={userName}
          more={handleMore}
          hasNextPage={data.user.repositories.pageInfo.hasNextPage}
        />
      }
    </div>
  );
};

export default SearchPage;
