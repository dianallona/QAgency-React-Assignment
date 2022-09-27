import { Component, FC } from "react";

function getDisplayName(WrappedComponent: FC) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const withClassName = (WrappedComponent: FC) => {
  return class extends Component {
    componentDidMount() {
      console.log(`Hello from ${getDisplayName(WrappedComponent)}`);
    }

    render() {
      return <WrappedComponent />;
    }
  };
};

export default withClassName;
