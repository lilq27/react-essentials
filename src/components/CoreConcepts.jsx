import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./CoreConcept";


export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Time to get started!!</h2>
          <ul>
            {/* {CORE_CONCEPTS.map((coreConcept) => (
              <CoreConcept
                title={coreConcept.title}
                description={coreConcept.description}
                image={coreConcept.image}
              />
            ))} */}
            {CORE_CONCEPTS.map((coreConcept, idx) => (
              <CoreConcept key={coreConcept.title + '_' + idx} {...coreConcept} />
            ))}
          </ul>
        </section>
    );
}