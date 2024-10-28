const UsersListView = (props: any) => {
    const { users } = props

    return (
        <ul>
        {users?.map(({id, name}: any) => (
            <li key={id}>{ name }</li>
        ))}
        </ul>
    )
}


export { UsersListView }
