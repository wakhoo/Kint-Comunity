import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import MainNavigation from "../layout/MainNavigation";
import styles from "./PostForm.module.css";

function GazePostForm(){
    const router=useRouter();
    const t_nameInputRef=useRef();
    const imageInputRef=useRef();
    const descriptionInputRef=useRef();
    const rowInputRef=useRef();
    const colInputRef=useRef();
    const niddle_sInputRef=useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredT_name=t_nameInputRef.current.value;
        const enteredImage=imageInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;
        const enteredRow=rowInputRef.current.value;
        const enteredCol=colInputRef.current.value;
        const enteredNiddle_s=niddle_sInputRef.current.value;

        const gazePostData={
            t_name:enteredT_name,
            image:enteredImage,
            description:enteredDescription,
            row:enteredRow,
            col:enteredCol,
            niddle_s:enteredNiddle_s
        }
        fetch('/api/submitGaze',{
            method:'POST',
            body:JSON.stringify(gazePostData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>console.log(data));
        router.replace('/board/gaze');
    }
return (
<form className={styles.formBox} onSubmit={submitHandler}>
<div>
<label htmlFor="title">실의 이름</label>
<input type="text" required id="title" ref={t_nameInputRef}/></div>
<div>
<label htmlFor="image">게이지 사진</label>
<input type="url" required id="image" ref={imageInputRef}/></div>
<div>
<label htmlFor="description">부연 설명</label>
<textarea id="description" required rows="10" ref={descriptionInputRef}></textarea>
</div>
<div>
<label htmlFor="tags">코수(10cm 기준)</label>
<input type="number" required id="row" ref={rowInputRef}/>
</div>
<div>
<label htmlFor="tags">단수(10cm 기준)</label>
<input type="number" required id="col" ref={colInputRef}/>
</div>
<div>
<label htmlFor="tags">바늘 사이즈</label>
<input type="text" required id="niddle_s" ref={niddle_sInputRef}/>
</div>
<div>
    <button>완료</button>
</div>
</form>
)
}
export default GazePostForm;