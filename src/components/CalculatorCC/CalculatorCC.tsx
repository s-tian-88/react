import { Component } from 'react'
import { calcUsd, fetchApi } from '../../services/fetchApi';
import styles from './calcCC.module.css'

const SECOND = 1000;

interface CalcCC extends Component {
    timeout: ReturnType<typeof setTimeout>
}


class CalcCC extends Component {

    constructor (props: any) {
        super(props)
        this.state = {
            rubAmount: 100,
            loading: true,
            usd: 0,
            show: true,
        }

        this.timeout;
    }

    componentDidMount () {
        this.loadData()
    }

    componentDidUpdate(oldProps: any, oldState: any) {
        if (oldState.rubAmount !== this.state.rubAmount) {
            console.log('[AMOUNT_CHANGE] Interface input change: %s', this.state.rubAmount);
        }
    }

    componentWillUnmount() {
        window.clearTimeout(this.timeout);
    }

    loadData () {
        setTimeout(() => {
            fetchApi()
            .then((data: any) => {
                console.log('Data is loaded at:' + new Date())
                const usd = data.find((c: any) => c.title === 'usd')
                this.setState(prev => ({
                    ...prev,
                    usd: usd.value,
                    loading: false
                }));

                this.timeout = window.setTimeout(this.loadData.bind(this), 5 * SECOND)
            });
        }, 2000)
    }

    onButtonClick = () => {
        this.setState(prev => ({...prev, show: !this.state.show}))
    }

    onChangeInputHandler = (event: any) => {
        const {name, value} = event.target
        this.setState(prev => ({
            ...prev,
            [name]: Number(value)
        }))
    }

    render () {

   const { rubAmount, usd, show, loading } = this.state;

        if (loading) return 'Loading...'

        return (
        <>  {show ? 
            <div className={styles["calc-container"]}>
                <input 
                    className={styles["calc-input"]}
                    name="rubAmount"
                    type="number"
                    min={1} 
                    id="calc-input"
                    defaultValue={rubAmount}
                    onChange={this.onChangeInputHandler}
                />
                <label className="calc-label" htmlFor="calc-input"> 
                    {`${calcUsd(rubAmount, usd, loading)}: 1 rub - ${usd} usd`}  
                </label>
            </div> :
            '' }
            <button 
                onClick={this.onButtonClick}
                className="calc-button"> 
            { show ? 'Hide' : 'Show' } 
            </button>
        </>
        )
    }
}

export { CalcCC }
