import React from "react";
import Card from "./components/card/Card";
import EditCard from "./components/edit-card/EditCard";

function App() {
  return (
    <div className="App">
      <EditCard/>

      
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
        img="https://s3-alpha-sig.figma.com/img/5fed/2ec9/fa2a5a59146f9ba3ad7ac727b23625c0?Expires=1642982400&Signature=e9Qw0ptnolLT4pf8W61mv0x~EnrtH7q3MqYzL8~7G0BMufdCOY7G5qKD00q3~BS8wI-EviS9WZ3E08UcUzM6r0panw67mAAT5CNwc1wQMdQNPxnI-1jIT9kYTkvl~7MyJgq~DaOP3Rau81p4eokHOd0olIE94L-Hd~WtuBhPHE8ZqFE4zmrfsE9YlaB6kOyHtbh7tSZU8W7KOU3xCQOTLRE1U21UyzXF9nRDUkSNGUqoW4s4EPyrpjQsI~P7SjzsIxz78tb0gfPpU3ylb42XNxHhv~4J9yktvqDJn7A0W-CKngL2-Y1LpwllRHFV24SaYQyHZt9hnp9nn05A1xwr8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
    </div>
  );
}

export default App;
