import CoreConcept from "./CoreConcept.jsx";
import { EXAMPLES } from "../../data.js";

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
          {EXAMPLES.map((item) => (
          <CoreConcept key={item.title} {...item}/>))}

        {/*-------------ELSŐ MEGOLDÁS-------------*/}

        {/* <CoreConcept title='api'
          description='apla'
          image={reactImg}
          /> MÁSIK MEGOLDÁS*/}
{/*
          <CoreConcept title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />

          <CoreConcept title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}
          />

          <CoreConcept title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}
          />

          <CoreConcept title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}
          /> */}

          {/*-------------MÁSODIK MEGOLDÁS-------------*/}

          {/* <CoreConcept {...CORE_CONCEPTS[0]}/> 

          <CoreConcept {...CORE_CONCEPTS[1]}/>

          <CoreConcept {...CORE_CONCEPTS[2]}/>

          <CoreConcept {...CORE_CONCEPTS[3]}/> */}
        </ul>
        </section>
    )
}