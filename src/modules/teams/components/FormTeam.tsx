import ImageInput from "../../../common/ui/ImageInput";
import Input from "../../../common/ui/input/Input";

import * as React from "react";
import styled from "styled-components";
import Button from "../../../common/ui/button/Button";
import * as sizes from "../../../common/variables/sizes";
import {Controller, useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {RouteNames} from "../../../common/variables/RouteNames";
import {useState} from "react";
import {api} from "../../../api/api";
import {ITeam} from "../../teams/interfaces/ITeam";
import Spinner from "../../../common/ui/spinner/spinner";
import {toast, Toaster} from "react-hot-toast";


export interface IFormTeamProps {
    data?: ITeam;
}

export const FormTeam: React.FC<IFormTeamProps> = ({data}) => {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        defaultValues: data || {},
    });

    const onSubmit = async (formdata: ITeam) => {

        setIsLoading(true);
        formdata.imageUrl = document.querySelector('input[name=imageUrl]')?.getAttribute('value');

        if (formdata.id) {
            api.putTeam(formdata)
                .then(() => toast.success('ok'))
                .then(() => navigate(-1))
                .catch((e) => toast.error('error ' + e))
                .finally(() => setIsLoading(false))
        } else {
            api.postTeam(formdata)
                .then(() => toast.success('ok'))
                .then(() => navigate(-1))
                .catch((e) => toast.error('error ' + e))
                .finally(() => setIsLoading(false))
        }

    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Col>
                <Controller
                    name="imageUrl"
                    control={control}
                    rules={{required: false}}
                    render={({field}) => (
                        <ImageInput
                            {...field}
                        />
                    )}
                />
            </Col>
            <Col>
                <Controller
                    name="name"
                    control={control}
                    rules={{required: true}}
                    render={({field}) => (
                        <Input
                            {...field}
                            label="Name"
                            placeholder="Input name"
                        />
                    )}
                />

                <Controller
                    name="foundationYear"
                    control={control}
                    rules={{required: false, min:1981, max: new Date().getFullYear()}}
                    render={({field}) => (
                        <Input
                            {...field}
                            type={"number"}
                            label="Foundation Year"
                            placeholder="Input Year"
                            error={errors.foundationYear&& 'Wrong year' }
                        />
                    )}
                />
                <Controller
                    name="division"
                    control={control}
                    rules={{required: false}}
                    render={({field}) => (
                        <Input
                            {...field}
                            label="Division"
                            placeholder="Input division"
                        />
                    )}
                />

                <TwoColumns>


                    <Controller
                        name="conference"
                        control={control}
                        rules={{required: false}}
                        render={({field}) => (
                            <Input
                                {...field}
                                label="Conference"
                                placeholder="Conference"
                                type="string"
                            />
                        )}
                    />

                </TwoColumns>
                <TwoColumns>
                    <div><Button secondary onClick={()=>navigate(-1)} >Cancel</Button></div>
                    <div><Button type={'submit'}>Save</Button></div>
                </TwoColumns>
                <Toaster/>
                {isLoading && <Spinner/>}
            </Col>

        </Form>
    );
}

const Form = styled.form`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 48px 0;

`;

const Col = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
`

const TwoColumns = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: ${sizes.$sm}) {
    display: block;
    flex-wrap: wrap;
    gap: 0px;
  }

  div {
    display: block;
    width: 100%;

    button {
      margin-top: 20px;
      width: 100%;
    }
  }
`