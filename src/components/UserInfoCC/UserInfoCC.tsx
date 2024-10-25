import styles from './userInfo.module.css'
import { Component, useId } from "react";

class UserInfoCC extends Component {

    render () {
        const {name, status, avatar} = this.props.info
        return (
            <article className={styles.article}>
                <h1>{ name }</h1>
                <img src={ avatar } alt={`${name}\`s avatar`} />
                <p>{ status }</p>
            </article>
        )
    }
}

export { UserInfoCC }
