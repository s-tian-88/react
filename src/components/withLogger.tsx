const withLogger = (Component: any) => {
    return function (props: any) {
        console.log(Component, props);
        return Component.apply(this, [props]);
    }
}

export { withLogger }
