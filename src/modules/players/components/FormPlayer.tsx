import ImageInput from "../../../common/ui/ImageInput";
import Input from "../../../common/ui/input/Input";
import CustomSelect from "../../../common/ui/CustomSelect/CustomSelect";
import * as React from "react";
import styled from "styled-components";
import {IPlayer} from "../interfaces/IPlayer";
import Button from "../../../common/ui/button/Button";
import * as sizes from "../../../common/variables/sizes";
import {Controller, useForm} from "react-hook-form";
import { useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../../api/api";
import {ITeam} from "../../teams/interfaces/ITeam";
import Spinner from "../../../common/ui/spinner/spinner";
import {toast, Toaster} from "react-hot-toast";


export interface IFormPlayerProps {
    data?: IPlayer;
}

export const FormPlayer: React.FC<IFormPlayerProps> = ({data}) => {

    const [teams, setTeams] = useState([]);
    const [positions, setPositions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        api.getTeams().then((res) => {
                setTeams(res.data.map((i: ITeam) => ({
                        value: i.id?.toString(),
                        label: i.name,
                    })
                ));
            }
        )
    }, []);

    useEffect(() => {
        api.getPositions().then((res) => {
                setPositions(res.map((i: string) => ({
                        value: i,
                        label: i,
                    })
                ));
            }
        )
    }, []);

    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        defaultValues: data || {},
    });

    const onSubmit = async (formdata: IPlayer) => {

        setIsLoading(true);
        formdata.avatarUrl = document.querySelector('input[name=avatarUrl]')?.getAttribute('value');

        if (formdata.id) {
            api.putPlayer(formdata)

                .then(() => navigate(-1))
                .catch((e) => toast.error('error ' + e))
                .finally(()=>setIsLoading(false))
        } else {
            api.postPlayer(formdata)

                .then(() => navigate(-1))
                .catch((e) => toast.error('error ' + e))
                .finally(()=>setIsLoading(false))
        }

    }



return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Col>
            <Controller
                name="avatarUrl"
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
                name="position"
                control={control}
                rules={{required: true}}
                render={({field: {onChange, value}}) => (
                    <CustomSelect options={positions}
                                  value={positions.find(({value: value1}) => value1 === value)}
                                  onChange={(val: any) => onChange(val.value)}
                                  label={"Position"}
                                  isClearable/>
                )}
            />

            <Controller
                name="team"
                control={control}
                rules={{required: false}}
                render={({field: {onChange, value}}) => (
                    <CustomSelect options={teams}
                                  value={teams.find(({value: value1}) => value1 === value)}
                                  onChange={(val: any) => onChange(val.value)}
                                  label={"Teams"}
                                  isClearable/>
                )}
            />
            <TwoColumns>
                <Controller
                    name="height"
                    control={control}
                    rules={{required: false}}
                    render={({field}) => (
                        <Input
                            {...field}
                            label="Height (cm)"
                            placeholder="Input height"
                        />
                    )}
                />
                <Controller
                    name="weight"
                    control={control}
                    rules={{required: false}}
                    render={({field}) => (
                        <Input
                            {...field}
                            label="Weight (kg)"
                            placeholder="Input weight"
                        />
                    )}
                />
            </TwoColumns>
            <TwoColumns>


                <Controller
                    name="birthday"
                    control={control}
                    rules={{required: false}}
                    render={({field}) => (
                        <Input
                            {...field}
                            label="Birthday"
                            placeholder="Birthday"
                            type="datetime-local"

                        />
                    )}
                />
                <Controller
                    name="number"
                    control={control}
                    rules={{required: false}}
                    render={({field}) => (
                        <Input
                            {...field}
                            label="Number"
                            placeholder="Input number"
                        />
                    )}
                />
            </TwoColumns>
            <TwoColumns>
                <div><Button secondary onClick={()=>navigate(-1)}>Cancel</Button></div>
                <div><Button type={'submit'}>Save</Button></div>
            </TwoColumns>

            <Toaster />
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