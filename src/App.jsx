import ThemeToggle from "@/components/shared/themeToggle";
import Container from "@/components/shared/container";
import Metrics from "@/components/shared/metrics";

const App = () => {
  // useEffect(() => {
  //   fetch("/api/devices?filter=25&page=1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  return (
    <Container type="section">
      <h1>Hello, WebPack Configuration is Done!</h1>
      <ThemeToggle />
      <Metrics />
    </Container>
  );
};

export default App;
