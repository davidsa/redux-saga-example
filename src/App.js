import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "./redux/actions";
import { getUsersSelector } from "./redux/selectors";

function App({ getUsersAction, users }) {
  useEffect(() => {
    getUsersAction();
  }, []);

  return (
    <div>
      <ul>
        {users.length &&
          users.map((user, index) => <li key={index}>{user.name}</li>)}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ users: getUsersSelector(state) });

const mapDispatchToProps = { getUsersAction };

export default connect(mapStateToProps, mapDispatchToProps)(App);
