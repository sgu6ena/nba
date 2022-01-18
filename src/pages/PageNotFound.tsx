import * as React from 'react';
import NotFound from "../assets/images/NotFound"

export interface IPageNotFoundProps {
}

export function PageNotFound (props: IPageNotFoundProps) {
  return (
    <div>
      <NotFound  width={300}/>
    </div>
  );
}
