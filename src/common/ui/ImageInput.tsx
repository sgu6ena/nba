import * as React from "react";
import styled from "styled-components";
import {useEffect, useState} from "react";
import ApiService from "../../api/api";

export interface IImageInputProps {

}

const ImageInput: React.FC<IImageInputProps> = () => {

    const [src, setSrc] = useState('');
    const [path, setPath] = useState('');
    const api = new ApiService();

    useEffect(() => {
        if (src)
            setPath(`${process.env.REACT_APP_API_URL}${src}`);
    }, [src]);
    const changeHandler = (event: any) => {
        const file = event.target.files[0];
        api.postImage(file).then(setSrc);
    };

    return (<>
            <StyledInputImage style={{background: ` url(${path}) center  no-repeat `, backgroundSize: "contain"}}>
                <input onChange={changeHandler} type="file" hidden/>
                <input type="text" value={src} hidden disabled/>
            </StyledInputImage>

        </>
    )
};

export default ImageInput;

const StyledInputImage = styled.label`
    width:336px;
    height:261px;
    transition:all 0.2s;
    border-radius:10px;

    content: url("data:image/svg+xml,%3Csvg width='336' height='261' viewBox='0 0 336 261'  xmlns='http://www.w3.org/2000/svg'%3E%3Crect opacity='0.4' width='336' height='261' rx='10' fill='%239C9C9C'/%3E%3Cpath opacity='0.7' fill-rule='evenodd' clip-rule='evenodd' d='M144.875 122.688C143.179 122.688 141.792 121.281 141.792 119.562V113.312H135.625C133.929 113.312 132.542 111.906 132.542 110.188C132.542 108.469 133.929 107.062 135.625 107.062H141.792V100.812C141.792 99.0938 143.179 97.6875 144.875 97.6875C146.571 97.6875 147.958 99.0938 147.958 100.812V107.062H154.125C155.821 107.062 157.208 108.469 157.208 110.188C157.208 111.906 155.821 113.312 154.125 113.312H147.958V119.562C147.958 121.281 146.571 122.688 144.875 122.688ZM164.614 133.625C166.267 130.724 169.32 128.938 172.625 128.938C175.93 128.938 178.983 130.724 180.636 133.625C182.288 136.526 182.288 140.099 180.636 143C178.983 145.901 175.93 147.688 172.625 147.688C169.32 147.688 166.267 145.901 164.614 143C162.962 140.099 162.962 136.526 164.614 133.625ZM197.292 113.312H187.517L183.694 109.094C182.553 107.812 180.888 107.062 179.162 107.062H159.428C159.952 108 160.292 109.031 160.292 110.188C160.292 113.625 157.517 116.438 154.125 116.438H151.042V119.562C151.042 123 148.267 125.812 144.875 125.812C143.734 125.812 142.717 125.469 141.792 124.938V157.062C141.792 160.5 144.567 163.312 147.958 163.312H197.292C200.683 163.312 203.458 160.5 203.458 157.062V119.562C203.458 116.125 200.683 113.312 197.292 113.312ZM157.208 138.312C157.208 146.937 164.115 153.937 172.625 153.937C181.135 153.937 188.041 146.937 188.041 138.312C188.041 129.687 181.135 122.687 172.625 122.687C164.115 122.687 157.208 129.687 157.208 138.312Z' /%3E%3C/svg%3E%0A");
  &:hover{
        border-radius:10px;
        background: grey;
        transition:all 0.2s;
        color:red;
  }

    `
