import styles from './userInfo.module.css'

const UserInfo = (props: any) => { // = ({ info }) => 

    const {name, status, avatar} = props.info

    const isHeading1 = false

    return (
        <article className={styles['article']}>
            {
                isHeading1 ? (
                    <h3>{ name }</h3>
                ) : (
                    <h1>{ name }</h1>
                )
            }
            <img src={ avatar } alt={`${name}\`s avatar`} />
            <p>{ status }</p>
        </article>
    )
}

export { UserInfo }
