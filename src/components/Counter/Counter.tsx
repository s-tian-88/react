import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux/slices/counterSlice";

export const Counter = () => {
    const value = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrementByAmount = (amount: number) => {
        dispatch(incrementByAmount(amount));
    };

    return (
        <div className="counter">
            <p>{value}</p>
            <button onClick={handleDecrement}>SUB ONE</button>
            <button onClick={handleIncrement}>ADD ONE</button>
            <button onClick={() => handleIncrementByAmount(10)}>ADD AMOUNT</button>
        </div>
    );
};

