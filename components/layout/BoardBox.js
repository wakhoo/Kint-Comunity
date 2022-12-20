import Link from "next/link";
import FreePostList from "../free/PostList";
import styles from "./BoardBox.module.css";
const DUMY_DATA=[
    {
        id:'1',
        title: '더미 1번',
        image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
        description:'더미 1번에는 뜨개질 관련 내용이 들어갑니다.'
    },
    {
        id:'2',
        title: '더미 2번',
        image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
        description:'더미 2번에는 뜨개질 관련 내용이 들어갑니다.'
    },
    {
        id:'3',
        title: '더미 3번',
        image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
        description:'더미 3번에는 뜨개질 관련 내용이 들어갑니다.'
    }
]
function BoardBox(props){
return <div className={styles.box}>
<FreePostList freeposts={DUMY_DATA}/>
</div>
}
export default BoardBox;