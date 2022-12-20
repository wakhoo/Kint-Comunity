import styles from "./post.module.css";
import Link from "next/link";
import {useRouter} from "next/router";

function FreePost(props){
    const router = useRouter();

    const handleClick = (id, title, description, tags, image) => {
        router.push(
        {
            pathname: `/board/free/${id}`,
            query: {
            id,
            title,
            description,
            tags,
            image
            },
        },
        `/board/free/${id}`
        );
    };
return(
    <div>
    <div className={styles.box2}>
    <div className={styles.box}>
    
    <div key={props.id} onClick={() => handleClick(props.id, props.title, props.description, props.tags, props.image)} >
        <Link href={`/board/free/${props.id}`}>
           <a  className={styles.title}>{props.title}</a> 
            </Link>
        <p className={styles.description}>{props.description}</p>
    </div>
    <div>
        <img
        src={props.image} 
        alt={props.title}
        width={150}
        height={100}
        />
    </div>
    </div>
    <div>
        <button>즐겨찾기</button>
    </div>
    </div>
    <div  className={styles.tagbox}>
        {
        props.tags.map(tag => <div className={styles.tag}>{tag}</div>)
        }
        </div>
    </div>
)
}
export default FreePost;