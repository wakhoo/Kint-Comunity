import MainNavigation from "../../../components/layout/MainNavigation"
import SideBar from "../../../components/layout/SideBar";
import BoardBox from "../../../components/layout/BoardBox";
import FreePostList from "../../../components/free/PostList";
import { Fragment,useState } from "react";
import Link from 'next/link';
import styles from "./index.module.css"
import Layout from "../../../components/layout/Layout";
import {buildSubmitPath,extractFreePost } from "../../api/submitFree"
// import { useRouter } from "next/router";

const DUMY_USER={
    nick:'DUMY one',
    twitter:'dumy_one',
    comment:"Hello, I'm Dumy"
}

function loadFreePostHandler(){
    fetch('/api/submitFree')
    .then(response=>response.json())
    .then(data=>setFreePost(data.freepost));

}
function Index(props){
   
    return (
       <Layout user={DUMY_USER}>
          <FreePostList freeposts={props.freeposts}/> 
        </Layout>
    )
}
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
export default Index;