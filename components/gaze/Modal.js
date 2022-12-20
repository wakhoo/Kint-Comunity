import styles from'./Modal.module.css';
import { useRef } from "react";
import React, { useState } from 'react';

export const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, row, col} = props;
  const [inputs, setInputs] = useState({
    row_len: '',
    col_len: ''
  });
  const [calc, setCalc] = useState(false);
  const row_lenInputRef=useRef();
  const col_lenInputRef=useRef();
  const { row_len, col_len} = inputs;
  const result_row= (Number(row)%10)*Number(row_len);
  const result_col= (Number(col)%10)*Number(col_len);
const finCalc = () => {
    setCalc(true);
};
const reCalc = () =>{
    setCalc(false);
    onReset();
    close;
}
const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      row_len: '',
      col_len: ''
    });
    // row_lenInputRef.current.focus();
  };
  
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? ( calc ? (
            <section>
                <div>떠야하는 코수: {result_row}</div>
                <div>떠야하는 단수: {result_col}</div>
            <button className="close" onClick={reCalc}>
              닫기
            </button>
            </section>
        ):(
        <section>
          {/* <main>{Number(row)+Number(col)}</main> */}
          {/* <form >
            <div> 
          <label htmlFor="tags">원하는 가로 길이(코수)</label>
            <input type="number" required id="row_len" ref={row_lenInputRef}/>
            </div>
            <div>
            <label htmlFor="tags">원하는 세로 길이(단수)</label>
            <input type="number" required id="col_len" ref={col_lenInputRef}/>
            </div> */}
            <input
            className={styles.input}
        name="row_len"
        placeholder="원하는 가로 길이(코)"
        onChange={onChange}
        value={row_len}
        ref={row_lenInputRef}
      />
      <input
        className={styles.input}
        name="col_len"
        placeholder="원하는 세로 길이(단)"
        onChange={onChange}
        value={col_len}
        ref={col_lenInputRef}
      />
            <button className="modal" onClick={finCalc}>
              계산하기
            </button>
            {/* </form> */}
          
          
        </section>)
      ) : null}
    </div>
  );
};