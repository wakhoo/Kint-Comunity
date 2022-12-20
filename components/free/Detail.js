import styles from "./post.module.css";
import Link from "next/link";
import {useRouter} from 'next/router';
import {useState,useEffect} from 'react'
function FreePostDetail(){
    const router = useRouter();
    const { title,description,tags,image } = router.query;
return(
    <div>
    <div className={styles.box2}>
    <div className={styles.box}>
    
    <div>

           <p  className={styles.title}>{title}</p> 
        <p className={styles.description}>{description}</p>
    </div>
    <div>
        <img
        src={image} 
        alt={title}
        width={150}
        height={100}
        />
    </div>
    </div>
    <div>
        <button>즐겨찾기</button>
    </div>
    </div>
    <p>{tags}</p>
    </div>
)
}
export default FreePostDetail;