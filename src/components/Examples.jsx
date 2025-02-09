import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Secstion from "./Section";
import Tabs from "./Tabs";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  // 첫번째는(selectedTopic) value, 두번째는(setSelectedTopic) function
  // function을 호출하면 value에 값을 업데이트 하고 해당 컴포넌트를 다시 실행

  function selectHandler(selectedBt) {
    setSelectedTopic(selectedBt);
  }

  //   const tabContent = (
  //     <div id="tab-content">
  //       {selectedTopic === undefined && <p>Please select a topic.</p>}
  //       {selectedTopic !== undefined && (
  //         <>
  //           <h3>{EXAMPLES[selectedTopic].title}</h3>
  //           <p>{EXAMPLES[selectedTopic].description}</p>
  //           <pre>
  //             <code>{EXAMPLES[selectedTopic].code}</code>
  //           </pre>
  //         </>
  //       )}
  //     </div>
  //   );

  const topics = ["components", "jsx", "props", "state"];

  return (
    <Secstion title="Examples" id="examples">
      <Tabs
        ButtonContainger="menu"
        buttons={
          <>
            {topics.map((topic) => (
              <TabButton
                key={topic}
                isSelected={selectedTopic === topic}
                onClick={() => selectHandler(topic)}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </TabButton>
            ))}

            {/* <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => selectHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => selectHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => selectHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => selectHandler("state")}
            >
              State
            </TabButton> */}
          </>
        }
      >
        {/* {tabContent} */}
        <div id="tab-content">
          {selectedTopic === undefined && <p>Please select a topic.</p>}
          {selectedTopic !== undefined && (
            <>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </>
          )}
        </div>
      </Tabs>
    </Secstion>
  );
}
