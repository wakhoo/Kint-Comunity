import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import MainNavigation from "../layout/MainNavigation";
import styles from "./PostForm.module.css";

function TogetherPostForm(){
    const router=useRouter();
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const descriptionInputRef=useRef();
    const blueprintInputRef=useRef();
    const tagInputRef=useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredTitle=titleInputRef.current.value;
        const enteredImage=imageInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;
        const enteredBlueprint=blueprintInputRef.current.value;
        const enteredTag=tagInputRef.current.value.split(',');
        const togetherPostData={
            title:enteredTitle,
            image:enteredImage,
            description:enteredDescription,
            blueprint:enteredBlueprint,
            tags:enteredTag
        }
        fetch('/api/submitTogether',{
            method:'POST',
            body:JSON.stringify(togetherPostData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>console.log(data));
        router.replace('/board/together');
    }
return (
<form className={styles.formBox} onSubmit={submitHandler}>
<div>
<label htmlFor="title">제목</label>
<input type="text" required id="title" ref={titleInputRef}/></div>
<div>
<label htmlFor="image">함께뜨기 결과 사진</label>
<input type="url" required id="image" ref={imageInputRef}/></div>
<div>
<label htmlFor="description">함께 뜨기 설명</label>
<textarea id="description" required rows="10" ref={descriptionInputRef}></textarea>
</div>
<div>
<label htmlFor="blueprint">도안 공유/판매 링크</label>
<input type="text" required id="blueprint" ref={blueprintInputRef}/>
</div>
<div>
<label htmlFor="tags">태그</label>
<input type="text" required id="tags" ref={tagInputRef}/>
</div>
<div>
    <button>완료</button>
</div>
</form>
)
}
export default TogetherPostForm;