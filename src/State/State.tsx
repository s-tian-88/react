import { useSelector } from "react-redux";

const State = () => {
    const { numberValue, userValue } = useSelector((state) => state?.number)

    return (
        <div>
            <h1>State</h1>
            <p>{ `numberValue: ${numberValue}` }</p>
            <p>{ `userValue: ${userValue}` }</p>
        </div>
    )
}

export { State };
