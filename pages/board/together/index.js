import MainNavigation from "../../../components/layout/MainNavigation"
import SideBar from "../../../components/layout/SideBar";
import BoardBox from "../../../components/layout/BoardBox";
import TogetherPostList from "../../../components/together/PostList";
import { Fragment,useState } from "react";
import Link from 'next/link';
import styles from "./index.module.css"
import Layout from "../../../components/layout/Layout";
import {buildSubmitPath,extractTogetherPost } from "../../api/submitTogether"

const DUMY_USER={
    nick:'DUMY one',
    twitter:'dumy_one',
    comment:"Hello, I'm Dumy"
}

function loadGazePostHandler(){
    fetch('/api/submitTogether')
    .then(response=>response.json())
    .then(data=>setTogetherPost(data.togetherpost));

}
function Index(props){
   
    return (
       <Layout user={DUMY_USER}>
          <TogetherPostList togetherposts={props.togetherposts}/> 
        </Layout>
    )
}
export async function getStaticProps(){
    const filePath=buildSubmitPath();
    const data=extractTogetherPost(filePath);
    return {
        props:{
            togetherposts: data,
        }
    }
}
export default Index;