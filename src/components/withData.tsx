import { Component } from 'react'

const withData = (endpoint: any, dataToState: any) => (Comp: any) => {
  return class extends Component {
    constructor(props: any) {
      super(props);
      this.state = {};
    }

    fetchData() {
      if (typeof endpoint === "function") {
        endpoint = endpoint(this.props);
      }

      fetch(endpoint)
        .then((result) => result.json())
        .then((data) => this.setState(dataToState(data)));
    }

    componentDidMount() {
      this.fetchData();
    }

    componentDidUpdate(prevProps: any, _prevState: any) {
      if (this.props.endpoint !== prevProps.endpoint) {
        this.fetchData();
      }
    }

    render() {
      console.log(this.props);
      return <Comp {...this.props} {...this.state} />;
    }
  };
};


export { withData }
