import * as React from "react";
import {useNavigate, useParams} from "react-router-dom";

import EditCard from "../common/components/edit-card/BigCard";
import LayerPage from "../common/components/LayerPage";
import { useAppSelector } from "../core/redux/redux";

import ImageBox from "../common/components/image-box/ImageBox";
import {ReactComponent as NotFound} from "../assets/images/NotFound.svg";
import {api} from "../api/api";
import {toast, Toaster} from "react-hot-toast";
import {useState} from "react";
import Spinner from "../common/ui/spinner/spinner";

export function Player() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { players } = useAppSelector(
    (state) => state.playerReducer
  );

  const thisPlayer = players.find((p) => p.id?.toString() === params.id);

  const onDelete = () => {
    setIsLoading(true);
    if (params.id)
      api.deletePlayer(params?.id)
          .then(() => toast.success('delete'))
          .then(() => setTimeout(() => navigate(-1), 2000))
          .catch((e) => {
            toast.error('error ' + e);
            setIsLoading(false);
          })

  }


  return (
    <LayerPage>
      {thisPlayer ? (
        <EditCard data={thisPlayer}   type="player"  onDelete={onDelete}       />
      ) : (
          <div style={{  margin: "auto" }}>
            <ImageBox
                title="Player Not Found"
                description="Sorry, we can’t find this player"
            >
              <NotFound width="90%" />
            </ImageBox>
          </div>
      )}
      {isLoading && <Spinner/>}
      <Toaster/>
    </LayerPage>
  );
}
