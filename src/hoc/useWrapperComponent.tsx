import { useEffect } from "react";

const useWrapperComponent = (componentName: string) => {
  useEffect(() => {
    console.log(`Hello from ${componentName}`);
  }, [componentName]);
};

export default useWrapperComponent;
