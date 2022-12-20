import Link from "next/link";
import GazePost from "./Post";
import styles from "./PostList.module.css";


function GazePostList(props){
return <div className={styles.box}>
    <button className={styles.writeBtn}><Link href={'/board/gaze/newGaze'}>글쓰기</Link></button>
    <ul className={styles.lire}>
    {props.gazeposts.map(gazepost => 
    <GazePost
    key={gazepost.id} 
    id={gazepost.id} 
    image={gazepost.image}
    t_name={gazepost.t_name}
    description={gazepost.description}
    row={gazepost.row}
    col={gazepost.col}
    niddle_s={gazepost.niddle_s}
    />)}
</ul>
</div>
}

export default GazePostList;