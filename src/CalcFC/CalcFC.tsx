import { useDispatch, useSelector } from "react-redux"
import { setUserValue, changeNumber } from "../redux/actions"


const CalcFC = () => {

    const dispatch= useDispatch()
    const { userValue, numberValue } = useSelector((state) => state.number)

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(changeNumber());
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input
                    type="number"
                    required
                    value={userValue}
                    onChange={(e) => {
                        dispatch(
                            setUserValue(e.target.value)
                        )
                    }}
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="button"
                >
                    Change number
                </button>
            </div>
            Result: {numberValue}
        </form>
    )
}

export { CalcFC };
