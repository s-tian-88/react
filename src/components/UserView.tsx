const UserView = (props: any) => {
    return (
        <div>
            <h1>{props.user?.name}</h1>
            <p>{props.user?.email}</p>
        </div>
    )
}

export { UserView }
