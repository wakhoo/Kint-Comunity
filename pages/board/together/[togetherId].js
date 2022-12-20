import { useRouter } from "next/router";
import TogetherPostDetail from "../../../components/together/Detail";
import {buildSubmitPath,extractFreePost } from "../../api/submitFree"



function DetailPage(props){
    const router = useRouter();

    const freeId = router.query.freeId;

    return(
        <TogetherPostDetail togetherposts={props.togetherposts}/>
    )
}

export default DetailPage;