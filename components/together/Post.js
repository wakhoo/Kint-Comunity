import styles from "./post.module.css";
import React, { useState } from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
const MyLink = React.forwardRef(
    (
      { as, children, href, replace, scroll, shallow, passHref, ...rest }, // extract all next/link props and pass the rest to the anchor tag
      ref,
    ) => (
      <Link as={as} href={href} passHref={passHref} replace={replace}>
        <a {...rest} ref={ref}>
          {children}
        </a>
      </Link>
    ),
  );
const TImage = (props) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
      <div
        className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <MyLink href="/">
          {isHovering ? (
            <img src={`${props.image}`} width={600} height={600} alt="logo" />
          ) : (
            <img src={`${props.image}`} width={150} height={150} alt="logo" />
          )}
        </MyLink>
      </div>
    );
  };
function TogetherPost(props){
    
return(
    <div>
    <div className={styles.box2}>
    <div className={styles.box}>
   
    {/* <div key={props.id} onClick={() => handleClick(props.id, props.title, props.description, props.tags, props.image)} > */}
    <div>
           <p  className={styles.title}>{props.title}</p> 
        <p className={styles.description}>{props.description}</p>
    </div>
    <div>
    <TImage image={props.image}/>
    </div>
    </div>
    <div>
        <a className={styles.title} href={props.blueprint}>함께 뜨기 도안 링크 바로가기!!</a>
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
export default TogetherPost;
