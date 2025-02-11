import { useEffect } from "react";

import Button from "./components/ui/button";

const App = () => {
  useEffect(() => {
    fetch("/api/devices?filter=25&page=1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <>
      <h1>Hello, WebPack Configuration is Done!</h1>
      <Button>Hello, this is a Primary Button</Button>
    </>
  );
};

export default App;
