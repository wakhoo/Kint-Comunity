import { useRouter } from "next/router";
import GazePostDetail from "../../../components/gaze/Detail";
import {buildSubmitPath,extractFreePost } from "../../api/submitFree"



function DetailPage(props){
    const router = useRouter();

    const freeId = router.query.freeId;

    return(
        <GazePostDetail gazeposts={props.gazeposts}/>
    )
}

export default DetailPage;