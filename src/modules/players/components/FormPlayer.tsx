import ImageInput from "../../../common/ui/ImageInput";
import Input from "../../../common/ui/input/Input";
import CustomSelect from "../../../common/ui/CustomSelect/CustomSelect";
import * as React from "react";
import styled from "styled-components";
import {IPlayer} from "../interfaces/IPlayer";
import Button from "../../../common/ui/button/Button";
import * as sizes from "../../../common/variables/sizes";
import {Controller, useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {RouteNames} from "../../../common/variables/RouteNames";
import {useEffect, useState} from "react";
import {api} from "../../../api/api";
import {ITeam} from "../../teams/interfaces/ITeam";

export interface IFormPlayerProps {
    data?: IPlayer;
}

export const FormPlayer: React.FC<IFormPlayerProps> = ({data}) => {

    const [teams, setTeams] = useState([]);
    const [positions, setPositions] = useState([]);

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
        defaultValues: data || {
            name: '',
            number: undefined,
            position: '',
            team: undefined,
            height: undefined,
            weight: undefined,
            avatarUrl: ''
        },
    });

    const onSubmit = async (formdata: IPlayer) => {
        formdata.birthday = formdata?.birthday ? formdata.birthday.concat(`T00:00:00.000Z`) : undefined;
        console.log(formdata);
        api.postPlayer(formdata)


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
                    render={({field}) => (
                        <CustomSelect options={positions}  {...field}
                                      label={"Position"} isClearable/>
                    )}
                />

                <Controller
                    name="position"
                    control={control}
                    rules={{required: false}}
                    render={({field}) => (
                        <CustomSelect options={teams}  {...field}
                                      label={"Teams"} isClearable/>
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
                                type={"date"}

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
                    <div><Link to={RouteNames.PLAYERS}><Button secondary>Cancel</Button></Link></div>
                    <div><Button type={'submit'}>Save</Button></div>
                </TwoColumns>
            </Col>
        </Form>
    )
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