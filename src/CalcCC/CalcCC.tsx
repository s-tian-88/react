import { Component } from "react";
import { connect } from "react-redux";

import { changeNumber, setUserValue } from "../redux/actions";


class CalcCC extends Component {
    constructor(props: any) {
        super(props);

        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        this.props.dispatch(changeNumber())
    }

    render () {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <input
                        type="number"
                        required
                        value={this.props.userValue}
                        onChange={(e) => {
                            this.props.dispatch(
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
                Result: {this.props.numberValue}
            </form>
        )
    }
}

const mapStateToProps = (state: any, _props?: any) => {
    return {
        somevalue: 13,
        numberValue: state.number.numberValue,
        userValue: state.number.userValue,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps,)(CalcCC);
export { CalcCC };
