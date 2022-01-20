import * as React from 'react';
import {ReactComponent as NotFound} from "../assets/images/NotFound.svg";

export interface IPageNotFoundProps {
}

export function PageNotFound (props: IPageNotFoundProps) {
  return (
    <div style={{display:"block", margin:"auto"}}>
      <NotFound  width={300}/>
    </div>
  );
}
