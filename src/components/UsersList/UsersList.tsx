import { useAppSelector, useAppDispatch } from "../hooks";
import { fetchUsers, removeUser } from "../redux/slices/usersSlice";

export const UsersList = () => {
  const { users, loading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(fetchUsers())}>GET USERS</button>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      <ul>
        {users?.length ? (
          users.map((user) => (
            <li onClick={() => dispatch(removeUser(user.id))} key={user.id}>
              {user.name}
            </li>
          ))
        ) : (
          <li>No any user!</li>
        )}
      </ul>
    </>
  );
};
