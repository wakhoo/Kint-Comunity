import MainNavigation from "../components/layout/MainNavigation";
import SideBar from "../components/layout/SideBar";
import BoardBox from "../components/layout/BoardBox";
import FreePostList from "../components/free/PostList";
import { Fragment,useState } from "react";
import Link from 'next/link';
import styles from "./index.module.css"
import Layout from "../components/layout/Layout";
import {buildSubmitPath,extractFreePost } from "../pages/api/submitFree"

// const DUMY_DATA=[
//     {
//         id:'1',
//         title: '더미 1번',
//         image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
//         description:'더미 1번에는 뜨개질 관련 내용이 들어갑니다.',
//         tags:['1','dd','das']
//     },
//     {
//         id:'2',
//         title: '더미 2번',
//         image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
//         description:'더미 2번에는 뜨개질 관련 내용이 들어갑니다.',
//         tags:['2','ddasd','das']
//     },
//     {
//         id:'3',
//         title: '더미 3번',
//         image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
//         description:'더미 3번에는 뜨개질 관련 내용이 들어갑니다.',
//         tags:['4','ddf','das','asd']
//     }
// ]
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
        }
    }
}
export default Index;