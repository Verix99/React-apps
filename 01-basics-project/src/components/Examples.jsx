import TabButton from "./TabButton";
import TabContent from "./TabContent";
import Section from "./Section";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Tabs from "./Tabs";



function Examples() {
    const [selectedTopic, setSelectedTopic] = useState("")

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
      }
    return(
        <Section title={"Examples"} id={"examples"}>
          <Tabs 
          buttons={
            <>
            <TabButton isClicked={selectedTopic == "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isClicked={selectedTopic == "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isClicked={selectedTopic == "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isClicked={selectedTopic == "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </>
        }>
        {!selectedTopic ? <p>Click on a tab to view the example</p> :
       <div id="tab-content">
          <TabContent {...EXAMPLES[selectedTopic]}/>
       </div>
       }
       </Tabs>
      </Section>
    )
}

export default Examples;