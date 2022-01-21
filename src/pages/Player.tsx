import * as React from 'react';
import EditCard from '../components/edit-card/EditCard';
export interface IPlayerProps {
}

export function Player (props: IPlayerProps) {
  return (
    <>
      <EditCard
        title="Jaylen Adams"
        place="#10"
        type="player"
        avatarUrl="https://s3-alpha-sig.figma.com/img/5fed/2ec9/fa2a5a59146f9ba3ad7ac727b23625c0?Expires=1642982400&Signature=e9Qw0ptnolLT4pf8W61mv0x~EnrtH7q3MqYzL8~7G0BMufdCOY7G5qKD00q3~BS8wI-EviS9WZ3E08UcUzM6r0panw67mAAT5CNwc1wQMdQNPxnI-1jIT9kYTkvl~7MyJgq~DaOP3Rau81p4eokHOd0olIE94L-Hd~WtuBhPHE8ZqFE4zmrfsE9YlaB6kOyHtbh7tSZU8W7KOU3xCQOTLRE1U21UyzXF9nRDUkSNGUqoW4s4EPyrpjQsI~P7SjzsIxz78tb0gfPpU3ylb42XNxHhv~4J9yktvqDJn7A0W-CKngL2-Y1LpwllRHFV24SaYQyHZt9hnp9nn05A1xwr8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
    </>
  );
}
