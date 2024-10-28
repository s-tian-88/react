import { withDataFC } from './withDataFC';
import { UsersListView } from './UsersListView'

const Userslist = withDataFC(
    "https://jsonplaceholder.typicode.com/users/", // andpoint
    (users: any) => ({ users }) // dataToState
)(UsersListView) // Component

export { Userslist }
