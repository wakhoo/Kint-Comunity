import Link from "next/link";
import TogetherPost from "./Post";
import styles from "./PostList.module.css";


function TogetherPostList(props){
return <div className={styles.box}>
    <button className={styles.writeBtn}><Link href={'/board/together/newTogether'}>글쓰기</Link></button>
    <ul className={styles.lire}>
    {props.togetherposts.map(togetherpost => 
    <TogetherPost
    key={togetherpost.id} 
    id={togetherpost.id} 
    image={togetherpost.image}
    title={togetherpost.title}
    description={togetherpost.description}
    blueprint={togetherpost.blueprint}
    tags={togetherpost.tags}
    />)}
</ul>
</div>
}

export default TogetherPostList;