import { withData } from './withData'
import { UserView } from './UserView'

export const User = withData(
  ({ id }: any) => `https://jsonplaceholder.typicode.com/users/${id}`,
  (user: any) => ({ user })
)(UserView);
