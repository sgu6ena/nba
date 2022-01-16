import React from "react";
import Card from "./components/card/Card";
import EditCard from "./components/edit-card/EditCard";
import Table from "./components/table/Table";

function App() {
  return (

  
    <div className="App">  <Table />
      <EditCard
        title="Portland trail blazers"
        type="command"
        img="https://s3-alpha-sig.figma.com/img/c5e0/3691/85c89cf192a7bc2f309304027ae93512?Expires=1642982400&Signature=YOvTmPxip-RvtBMCY8Uq6aiWFGiGJftEwdUo9JxbQd34IwrldwL2KDYGIEczEWMn7ffO8Z3mW-3z8jEsr8ABJRk1-yLGVN0AjG4uuByl1-RS2RoFY3KQ4bYTibWm7~Bv-vcZCOjmRX8yxOLu42sQUTghA~OMPOg~~xd1qOdg3HdhwCm4WJOcfIYjgGiNHDvD7-3Y50QLy-HfznBXEBWsxrqZefR5bQ2ImTGMA-4uTwrt5bA~vEDK355PJMdcqFmdddPalCieu7V~IEXgm5eqAWvFmY6EVnSKWpSbvEEd6SMLAaQXkUDiExjmaXVLijUKCvI4Tg0ayrC9LtH5t8ROfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
      <EditCard
        title="Jaylen Adams"
        place="#10"
        type="player"
        img="https://s3-alpha-sig.figma.com/img/5fed/2ec9/fa2a5a59146f9ba3ad7ac727b23625c0?Expires=1642982400&Signature=e9Qw0ptnolLT4pf8W61mv0x~EnrtH7q3MqYzL8~7G0BMufdCOY7G5qKD00q3~BS8wI-EviS9WZ3E08UcUzM6r0panw67mAAT5CNwc1wQMdQNPxnI-1jIT9kYTkvl~7MyJgq~DaOP3Rau81p4eokHOd0olIE94L-Hd~WtuBhPHE8ZqFE4zmrfsE9YlaB6kOyHtbh7tSZU8W7KOU3xCQOTLRE1U21UyzXF9nRDUkSNGUqoW4s4EPyrpjQsI~P7SjzsIxz78tb0gfPpU3ylb42XNxHhv~4J9yktvqDJn7A0W-CKngL2-Y1LpwllRHFV24SaYQyHZt9hnp9nn05A1xwr8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />

      <Card
        title="Portland trail blazers"
        subtitle="Year of foundation: 1970"
        type="command"
        img="https://s3-alpha-sig.figma.com/img/d85a/fc30/fc764029ec6a6e9050f56a57b6ea2570?Expires=1642982400&Signature=Slq8QZfjicklDvPiICWiUsIqEjr2SDJ5ufhSycPPhjryaN7-LBWp~oBgSrEaQJiay7O9TUKH0gU68hSccRbRZLPK~4mB9JmQc~Z66~A1vW0KBZWBw92laC2uAJflxVzE~uMH8oiADk17sIOt5Savc0NY5n~BGlPxbBUpLp4UZaxpTMYM-JKyB6CBlqvk~WNu6eCxujk9QXWNjZnhFq47LTwXi5qmuorNM-iPyyf~MzoEG6lDQaCNJ6EXYhhhitOc3QgkSLJOHyQDOzicFIT7SkQ1LO-q4ve47mNr1jDhGLCjqD9JiGkTpDpaySyYodgnCbAGl~rTt-SAftKr-aFHrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />

      <Card
        title="Jaylen Adams"
        place="#10"
        subtitle="Portland trail blazers"
        type="player"
        img="https://s3-alpha-sig.figma.com/img/8c2a/ece8/b52911ba57321df8fb3fb2af84edafbd?Expires=1642982400&Signature=fud3OGGleiLeqcM7cx8S7IVkaDPVvEemGVK4LITk~8Pj5GcWeX0LdtdtTsJK-ptdCJR0I~G8u7QHJvj1VwM02RZGuNK82pbNpyuy2yLBE4jk4Ce-S~PNlzh9Ox1jQutX4BrxT1G0DAMXL2RceFk4a7ofuTssQxdjiPgil56er2fvmDAfq9U2XcqMlWKjlGyDmegQXCuy--KpBFzSr7Mlu8VwE2UWo8plc-Gti25QA12Ava9PRawq-xI~7j82bYbGa~hhxGJ~7dghQkLthRns6JfrdMAfMK97kivjxiA3UNZodNcvkZ8lj5irGBcDk5TkY1aESePQ43DjyTSHXYKG5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
    </div>
  );
}

export default App;
