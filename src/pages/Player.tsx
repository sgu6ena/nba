import * as React from 'react';
import EditCard from '../components/edit-card/EditCard';
import LayerPage from '../components/LayerPage';
export interface IPlayerProps {
}

export function Player (props: IPlayerProps) {
  return (
     <LayerPage>
      <EditCard
        title="Jaylen Adams"
        place="#10"
        type="player"
        avatarUrl="https://www.pngplay.com/wp-content/uploads/6/Michael-Jordan-Basketball-Player-Face-PNG.png"
      />
    </LayerPage>
  );
}
