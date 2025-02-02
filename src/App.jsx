import { useState } from "react";
import { CoreConcept } from "./components/CoreConcept.jsx";
import { Header } from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function App() {

  const [tabContent, setTabContent] = useState('Please click a button');
  // 첫번째는(tabContent) value, 두번째는(setTabContent) function
  // function을 호출하면 value에 값을 업데이트 하고 해당 컴포넌트를 다시 실행

  function selectHandler(selectedBt) {
    setTabContent(selectedBt);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* {CORE_CONCEPTS.map((coreConcept) => (
              <CoreConcept
                title={coreConcept.title}
                description={coreConcept.description}
                image={coreConcept.image}
              />
            ))} */}
            {CORE_CONCEPTS.map((coreConcept) => (
              <CoreConcept {...coreConcept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => selectHandler('components')}>Components</TabButton>
              <TabButton onSelect={() => selectHandler('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => selectHandler('props')}>Props</TabButton>
              <TabButton onSelect={() => selectHandler('state')}>State</TabButton>
            </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
