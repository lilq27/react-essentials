import { Header } from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { Examples } from "./components/Examples.jsx";

function App() {
  return (
    <>  {/* <Fragment> </Fragment => 렌더링 안되는 요소 => 최근 버전 => <> </> */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
