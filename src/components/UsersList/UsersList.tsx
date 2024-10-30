import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchUsers, removeUser, usersState } from "../../redux/slices/usersSlice";

export const UsersList = () => {
  // const { users, loading, error } = useAppSelector((state) => state.users);
  const { users, loading, error } = useAppSelector(usersState); // selectors prop in slice
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(fetchUsers())}>GET USERS</button>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      <ul className="usersList">
        {users?.length ? (
          users.map((user) => (
            <li onClick={() => dispatch(removeUser(user.id))} key={user.id}>
            {`Name: ${user.name}, Email: ${user.email}`}
            </li>
          ))
        ) : (
          <li>No any user!</li>
        )}
      </ul>
    </>
  );
};
