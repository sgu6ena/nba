import ImageInput from "../../../common/ui/ImageInput";
import Input from "../../../common/ui/input/Input";
import CustomSelect from "../../../common/ui/CustomSelect/CustomSelect";
import * as React from "react";
import styled from "styled-components";
import {IPlayer} from "../interfaces/IPlayer";
import Button from "../../../common/ui/button/Button";
import * as sizes from "../../../common/variables/sizes";
export interface IFormPlayerProps {
    data: IPlayer;
}

const options = [
    {value: "CenterForward", label: "Center forward"},
    {value: "GuardForward", label: "Guard forward"},
    {value: "Forward", label: "Forward"},
    {value: "Center", label: "Center"},
    {value: "Guard", label: "Guard"},
];

export const FormPlayer: React.FC<IFormPlayerProps> = ({data}) => {
    return (
        <Row>
            <Col>
                <ImageInput value={data.avatarUrl}/>
            </Col>
            <Col>
                <Input label="Name" value={data.name}/>
                <CustomSelect options={options} label={"Position"} isClearable/>
                <CustomSelect options={options} label={"Team"} isClearable/>
                <TwoColumns>
                    <Input label="Heigth (cm)" value={data.height}/>
                    <Input label="Weight (kg)" value={data.weight}/>
                </TwoColumns>
                <TwoColumns>
                    <Input label="Birstday" type="date"/>
                    <Input label="Number"/>{" "}
                </TwoColumns>
                <TwoColumns>
                    <div><Button secondary>Cancel</Button></div>
                    <div><Button>Save</Button></div>

                </TwoColumns>
            </Col>
        </Row>
    )
}

const Row = styled.div`
  gap:20px;
  display: flex;
  flex-wrap:wrap;
  padding: 48px 0;
  align-items: stretch;
`;

const Col = styled.div`
   display: flex;
   flex-direction: column;  
   margin:0 auto;
`

const TwoColumns = styled.div`
   display: flex;
    gap:20px;
      @media screen and (max-width: ${sizes.$sm}){
    flex-wrap:wrap;
     gap:0px;
  }
    div{

    display:block;
    width:100%;
    button{    margin-top:20px;
    
     width:100%;
     
    }
    }
`