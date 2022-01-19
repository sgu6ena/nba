import * as React from 'react';
import NotFound from "../assets/images/NotFound"

export interface IPageNotFoundProps {
}

export function PageNotFound (props: IPageNotFoundProps) {
  return (
    <div style={{display:"block", margin:"auto"}}>
      <NotFound  width={300}/>
    </div>
  );
}
