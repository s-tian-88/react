simple examples Class-base Component
```tsx
const withLogger = (component) => {
    return class extends Reacr.Component {
        render () {
            console.log(this.props)
            return <Component {...this.props} />
        }
    }
}
```

```tsx
function withData(Component, endpoint, propName) {
    return class extendsReact.Component{
        state = {}

        fetchData () {
            if (typeof endpoint === 'function') {
                endpoint = endpoint(this.props)
            }
            fetch(endpoint)
                .then(result => result.json())
                .then(data => this.setState({
                    [propName]: data
                }));
        }

        componentDidMount () {
            this.fetchData()
        }

        componentDidUpdate (prevProps, prevState) {
            if (this.props.endpoint !== prevState.endpoint) {
                this.fetchData()
            }
        }

        render () {
            const propsFromState = { [propName]: this.state[propName] }
            return <Component {...this.props} {...propsFromState}>
        }
    }
}
```
