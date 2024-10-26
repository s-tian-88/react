const fetchApi = () => {
    return window.Promise.resolve([
        {value: 1, title: 'rub'},
        {value: 100 - Math.floor(Math.random() * 10), title: 'usd'}
    ])
}

const calcUsd = (rubAmount: any, usd: any, loading: any) => {
    return loading ? 0 : (rubAmount/ usd).toFixed(2)
}

export { fetchApi, calcUsd }
