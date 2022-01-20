import * as React from 'react';

import EditCard from '../components/edit-card/EditCard';
import Table from '../components/table/Table';
export interface ICommandProps {
}

export function Command (props: ICommandProps) {
  return (
    <div>
      <EditCard
        title="Portland trail blazers"
        type="command"
        avatarUrl="https://s3-alpha-sig.figma.com/img/c5e0/3691/85c89cf192a7bc2f309304027ae93512?Expires=1642982400&Signature=YOvTmPxip-RvtBMCY8Uq6aiWFGiGJftEwdUo9JxbQd34IwrldwL2KDYGIEczEWMn7ffO8Z3mW-3z8jEsr8ABJRk1-yLGVN0AjG4uuByl1-RS2RoFY3KQ4bYTibWm7~Bv-vcZCOjmRX8yxOLu42sQUTghA~OMPOg~~xd1qOdg3HdhwCm4WJOcfIYjgGiNHDvD7-3Y50QLy-HfznBXEBWsxrqZefR5bQ2ImTGMA-4uTwrt5bA~vEDK355PJMdcqFmdddPalCieu7V~IEXgm5eqAWvFmY6EVnSKWpSbvEEd6SMLAaQXkUDiExjmaXVLijUKCvI4Tg0ayrC9LtH5t8ROfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
            <Table />
    </div>
  );
}
