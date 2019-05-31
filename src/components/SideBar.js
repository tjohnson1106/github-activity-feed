import React from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { directive } from "@babel/types";

const GET_VIEWER = gql`
  query {
    viewer {
      avatarUrl
      login
    }
  }
`;

const SideBar = () => {
  return (
    <aside>
      <div>
        <Query query={GET_VIEWER}>
          {({ loading, error, data }) => (
            <>
              {loading && <div>Loading...</div>}
              {error && <div>Error...</div>}
              {data && data.viewer && (
                <img src={data.viewer.avatarUrl} alt={data.viewer.login} />
              )}
            </>
          )}
        </Query>

        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          logout
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
