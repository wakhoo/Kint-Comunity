import { useRouter } from "next/router";
import FreePostDetail from "../../../components/free/Detail";
import {buildSubmitPath,extractFreePost } from "../../api/submitFree"

function loadFreePostHandler(){
    fetch('/api/submitFree')
    .then(response=>response.json())
    .then(data=>setFreePost(data.freepost));

}

function DetailPage(props){
    const router = useRouter();

    const freeId = router.query.freeId;

    return(
        <FreePostDetail freeposts={props.freeposts}/>
    )
}
export async function getStaticPaths(){
    return{
        fallback:true,
        paths:[
            {
                params:{
                freeId:'2022-10-31T07:45:02.610Z'
                }
            },
            {
                params:{
                freeId:'2022-10-31T06:31:45.579Z'
                }
            },
        ]
    }
}
// export async function getStaticProps(context){
//     const freeId = context.params.freeId;
//     console.log(freeId);
//     return {
//         props:{
//             image:'',
//             title:' ',
//             description:'',
//             tags:'da,da,da',
//             id: freeId
//         },
        
//     }
// }
export async function getStaticProps(){
    const filePath=buildSubmitPath();
    const data=extractFreePost(filePath);
    return {
        props:{
            freeposts: data,
        },
        revalidate:1
    }
}
export default DetailPage;