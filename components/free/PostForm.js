import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import MainNavigation from "../layout/MainNavigation";
import styles from "./PostForm.module.css";

function FreePostForm(){
    const router=useRouter();
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const descriptionInputRef=useRef();
    const tagInputRef=useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredTitle=titleInputRef.current.value;
        const enteredImage=imageInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;
        const enteredTag=tagInputRef.current.value.split(',');
        const freePostData={
            title:enteredTitle,
            image:enteredImage,
            description:enteredDescription,
            tags:enteredTag
        }
        fetch('/api/submitFree',{
            method:'POST',
            body:JSON.stringify(freePostData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>console.log(data));
        router.replace('/board/free');
    }
return (
<form className={styles.formBox} onSubmit={submitHandler}>
<div>
<label htmlFor="title">게시글 제목</label>
<input type="text" required id="title" ref={titleInputRef}/></div>
<div>
<label htmlFor="image">게시글 사진</label>
<input type="url" required id="image" ref={imageInputRef}/></div>
<div>
<label htmlFor="description">게시글 내용</label>
<textarea id="description" required rows="10" ref={descriptionInputRef}></textarea>
</div>
<div>
<label htmlFor="tags">게시글 태그</label>
<input type="text" required id="tags" ref={tagInputRef}/>
</div>
<div>
    <button>완료</button>
</div>
</form>
)
}
export default FreePostForm;