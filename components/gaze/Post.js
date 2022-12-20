import styles from "./post.module.css";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from 'react';
import { Modal } from "./modal";

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
            <img src={`${props.image}`} width={600} height={300} alt="logo" />
          ) : (
            <img src={`${props.image}`} width={150} height={100} alt="logo" />
          )}
        </MyLink>
      </div>
    );
  };
function GazePost(props){
    const [modalOpen, setModalOpen] = useState(false);
    const [calc, setCalc] = useState(false);

    const openModal = () => {
        setModalOpen(true);
        setCalc(false)
    };
    const closeModal = () => {
        setModalOpen(false);
        setCalc(true);
    };
        
    return(
        <div>
        <div className={styles.box2}>
        <div className={styles.box}>
    <div> 
        
            <p  className={styles.t_name}>{props.t_name}</p> 

            <p className={styles.description}>{props.description}</p>
            <p className={styles.t_name}>코수: {props.row} 단수: {props.col}</p>
            <p className={styles.t_name}>사용한 바늘 호수: {props.niddle_s}mm</p>
        </div>
        <div>
            <TImage image={props.image}/>
        </div>
        </div>
        <div>
            <button onClick={() => {setModalOpen(!modalOpen)}}>게이지 계산하기</button>
            <Modal open={modalOpen} close={closeModal} row={props.row} col={props.col}>
      </Modal>
            
        </div>
        </div>
        </div>
    )
}
export default GazePost;