import * as React from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/Card";
import Button from "../ui/button/Button";

export interface ICommandListProps {}

export function CommandList(props: ICommandListProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        rowGap:"32px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",

        }}
      >
        <input />
        <Button>Add + </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2em" }}>
        <Card
          title="Portland trail blazers"
          subtitle="Year of foundation: 1970"
          type="command"
          avatarUrl="https://s3-alpha-sig.figma.com/img/d85a/fc30/fc764029ec6a6e9050f56a57b6ea2570?Expires=1642982400&Signature=Slq8QZfjicklDvPiICWiUsIqEjr2SDJ5ufhSycPPhjryaN7-LBWp~oBgSrEaQJiay7O9TUKH0gU68hSccRbRZLPK~4mB9JmQc~Z66~A1vW0KBZWBw92laC2uAJflxVzE~uMH8oiADk17sIOt5Savc0NY5n~BGlPxbBUpLp4UZaxpTMYM-JKyB6CBlqvk~WNu6eCxujk9QXWNjZnhFq47LTwXi5qmuorNM-iPyyf~MzoEG6lDQaCNJ6EXYhhhitOc3QgkSLJOHyQDOzicFIT7SkQ1LO-q4ve47mNr1jDhGLCjqD9JiGkTpDpaySyYodgnCbAGl~rTt-SAftKr-aFHrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />

        <Card
          title="Portland trail blazers"
          subtitle="Year of foundation: 1970"
          type="command"
          avatarUrl="https://s3-alpha-sig.figma.com/img/d85a/fc30/fc764029ec6a6e9050f56a57b6ea2570?Expires=1642982400&Signature=Slq8QZfjicklDvPiICWiUsIqEjr2SDJ5ufhSycPPhjryaN7-LBWp~oBgSrEaQJiay7O9TUKH0gU68hSccRbRZLPK~4mB9JmQc~Z66~A1vW0KBZWBw92laC2uAJflxVzE~uMH8oiADk17sIOt5Savc0NY5n~BGlPxbBUpLp4UZaxpTMYM-JKyB6CBlqvk~WNu6eCxujk9QXWNjZnhFq47LTwXi5qmuorNM-iPyyf~MzoEG6lDQaCNJ6EXYhhhitOc3QgkSLJOHyQDOzicFIT7SkQ1LO-q4ve47mNr1jDhGLCjqD9JiGkTpDpaySyYodgnCbAGl~rTt-SAftKr-aFHrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <Card
          title="Portland trail blazers"
          subtitle="Year of foundation: 1970"
          type="command"
          avatarUrl="https://s3-alpha-sig.figma.com/img/d85a/fc30/fc764029ec6a6e9050f56a57b6ea2570?Expires=1642982400&Signature=Slq8QZfjicklDvPiICWiUsIqEjr2SDJ5ufhSycPPhjryaN7-LBWp~oBgSrEaQJiay7O9TUKH0gU68hSccRbRZLPK~4mB9JmQc~Z66~A1vW0KBZWBw92laC2uAJflxVzE~uMH8oiADk17sIOt5Savc0NY5n~BGlPxbBUpLp4UZaxpTMYM-JKyB6CBlqvk~WNu6eCxujk9QXWNjZnhFq47LTwXi5qmuorNM-iPyyf~MzoEG6lDQaCNJ6EXYhhhitOc3QgkSLJOHyQDOzicFIT7SkQ1LO-q4ve47mNr1jDhGLCjqD9JiGkTpDpaySyYodgnCbAGl~rTt-SAftKr-aFHrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <Card
          title="Portland trail blazers"
          subtitle="Year of foundation: 1970"
          type="command"
          avatarUrl="https://s3-alpha-sig.figma.com/img/d85a/fc30/fc764029ec6a6e9050f56a57b6ea2570?Expires=1642982400&Signature=Slq8QZfjicklDvPiICWiUsIqEjr2SDJ5ufhSycPPhjryaN7-LBWp~oBgSrEaQJiay7O9TUKH0gU68hSccRbRZLPK~4mB9JmQc~Z66~A1vW0KBZWBw92laC2uAJflxVzE~uMH8oiADk17sIOt5Savc0NY5n~BGlPxbBUpLp4UZaxpTMYM-JKyB6CBlqvk~WNu6eCxujk9QXWNjZnhFq47LTwXi5qmuorNM-iPyyf~MzoEG6lDQaCNJ6EXYhhhitOc3QgkSLJOHyQDOzicFIT7SkQ1LO-q4ve47mNr1jDhGLCjqD9JiGkTpDpaySyYodgnCbAGl~rTt-SAftKr-aFHrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <Card
          title="Portland trail blazers"
          subtitle="Year of foundation: 1970"
          type="command"
          avatarUrl="https://s3-alpha-sig.figma.com/img/d85a/fc30/fc764029ec6a6e9050f56a57b6ea2570?Expires=1642982400&Signature=Slq8QZfjicklDvPiICWiUsIqEjr2SDJ5ufhSycPPhjryaN7-LBWp~oBgSrEaQJiay7O9TUKH0gU68hSccRbRZLPK~4mB9JmQc~Z66~A1vW0KBZWBw92laC2uAJflxVzE~uMH8oiADk17sIOt5Savc0NY5n~BGlPxbBUpLp4UZaxpTMYM-JKyB6CBlqvk~WNu6eCxujk9QXWNjZnhFq47LTwXi5qmuorNM-iPyyf~MzoEG6lDQaCNJ6EXYhhhitOc3QgkSLJOHyQDOzicFIT7SkQ1LO-q4ve47mNr1jDhGLCjqD9JiGkTpDpaySyYodgnCbAGl~rTt-SAftKr-aFHrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <Card
          title="Portland trail blazers"
          subtitle="Year of foundation: 1970"
          type="command"
          avatarUrl="https://s3-alpha-sig.figma.com/img/d85a/fc30/fc764029ec6a6e9050f56a57b6ea2570?Expires=1642982400&Signature=Slq8QZfjicklDvPiICWiUsIqEjr2SDJ5ufhSycPPhjryaN7-LBWp~oBgSrEaQJiay7O9TUKH0gU68hSccRbRZLPK~4mB9JmQc~Z66~A1vW0KBZWBw92laC2uAJflxVzE~uMH8oiADk17sIOt5Savc0NY5n~BGlPxbBUpLp4UZaxpTMYM-JKyB6CBlqvk~WNu6eCxujk9QXWNjZnhFq47LTwXi5qmuorNM-iPyyf~MzoEG6lDQaCNJ6EXYhhhitOc3QgkSLJOHyQDOzicFIT7SkQ1LO-q4ve47mNr1jDhGLCjqD9JiGkTpDpaySyYodgnCbAGl~rTt-SAftKr-aFHrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </div>
    </div>
  );
}
