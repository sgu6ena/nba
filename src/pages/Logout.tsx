import React from "react";

import {ReactComponent as BasketIn} from "../assets/images/Basket-in.svg";
import ImageBox from "../common/components/image-box/ImageBox";

import LayerPage from "../common/components/LayerPage";

import Button from "../common/ui/button/Button";
import {RouteNames} from "../common/variables/RouteNames";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../core/redux/redux";
import {removeUser} from "../core/auth";


const Logout: React.FC = () => {

    const dispatch = useAppDispatch();
    return (
        <LayerPage>
            <div style={{margin: "auto"}}>
                <ImageBox title="Logout?" >
                    <BasketIn height={200} width={300}/>
                    <div style={{display: "flex", gap: "20px", marginTop: "30px"}}>
                        <Link to={RouteNames.HOME}><Button secondary>Cancel</Button> </Link>
                        <Button onClick={()=> dispatch(removeUser())}>Yes</Button>
                    </div>

                </ImageBox>
            </div>
        </LayerPage>
    );
};

export default Logout;
