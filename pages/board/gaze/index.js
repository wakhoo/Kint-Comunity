import MainNavigation from "../../../components/layout/MainNavigation"
import SideBar from "../../../components/layout/SideBar";
import BoardBox from "../../../components/layout/BoardBox";
import GazePostList from "../../../components/gaze/PostList";
import { Fragment,useState } from "react";
import Link from 'next/link';
import styles from "./index.module.css"
import Layout from "../../../components/layout/Layout";
import {buildSubmitPath,extractGazePost } from "../../api/submitGaze"

const DUMY_USER={
    nick:'DUMY one',
    twitter:'dumy_one',
    comment:"Hello, I'm Dumy"
}

function loadGazePostHandler(){
    fetch('/api/submitGaze')
    .then(response=>response.json())
    .then(data=>setGazePost(data.gazepost));

}
function Index(props){
   
    return (
       <Layout user={DUMY_USER}>
          <GazePostList gazeposts={props.gazeposts}/> 
        </Layout>
    )
}
export async function getStaticProps(){
    const filePath=buildSubmitPath();
    const data=extractGazePost(filePath);
    return {
        props:{
            gazeposts: data,
        }
    }
}
export default Index;