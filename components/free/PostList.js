import Link from "next/link";
import FreePost from "./Post";
import styles from "./PostList.module.css";


function FreePostList(props){
return <div className={styles.box}>
    <button className={styles.writeBtn}><Link href={'/board/free/newFree'}>글쓰기</Link></button>
    <ul className={styles.lire}>
    {props.freeposts.map(freepost => 
    <FreePost
    key={freepost.id} 
    id={freepost.id} 
    image={freepost.image}
    title={freepost.title}
    description={freepost.description}
    tags={freepost.tags}
    />)}
</ul>
</div>
}

export default FreePostList;