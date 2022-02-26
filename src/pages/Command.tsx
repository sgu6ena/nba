import * as React from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import EditCard from "../common/components/edit-card/BigCard";
import LayerPage from "../common/components/LayerPage";
import Table from "../modules/teams/components/table/Table";


import ImageBox from "../common/components/image-box/ImageBox";
import {ReactComponent as NotFound} from "../assets/images/NotFound.svg";
import {api} from "../api/api";
import {toast, Toaster} from "react-hot-toast";
import {useEffect, useState} from "react";
import Spinner from "../common/ui/spinner/spinner";



export function Command() {
    const params = useParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [team, setTeam] = useState()

   useEffect(()=>{
       setIsLoading(true);
       api.getTeam(params?.id)
           .then((data) => setTeam(data))
           .catch(()=>console.log('error'))
           .finally( ()=>setIsLoading(false))
   },[params.id])



    const onDelete = () => {
        setIsLoading(true);
        if (params.id)
            api.deleteTeam(params?.id)
                .then(() => toast.success('delete'))
                .then(() => setTimeout(() => navigate(-1), 2000))
                .catch((e) => {
                    toast.error('error ' + e);
                    setIsLoading(false);
                })

    }

    return (
        <LayerPage>
            {team ? (
                <>
                    <EditCard data={team} type="command" onDelete={onDelete}/>
                    <Table/>
                </>
            ) : (
                <div style={{margin: "auto"}}>
                    <ImageBox
                        title="Team Not Found"
                        description="Sorry, we can’t find this team"
                    >
                        <NotFound width="90%"/>
                    </ImageBox>
                </div>
            )}

            {isLoading && <Spinner/>}
            <Toaster/>
        </LayerPage>
    );
}
