import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [글날짜,c] = useState(['2월 17일 발행','2월 17일 발행','2월 17일 발행']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] =useState(0);

  function solution(arr1, arr2) {
    var answer = []; 
    for (var i=0; i<arr1.length; i++){
        answer.push(arr1[i] + arr2[i]);
    }
    return answer;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'}}>ReactBlog</h4>
      </div>
      <button onClick={
        ()=>{
          let copy3 = [...글제목];
          copy3.sort();
          글제목변경(copy3)

        }
      }>가나다순정렬</button>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>
      
        {글제목.map((elem,index)=>{
            return( 
              <div className="list">
              <h4 onClick={()=>{  setModal(!modal); setTitle(index)  }}>{글제목[index]}<span onClick={function(){ 
                let copy2 = [...따봉];
                copy2[index] = copy2[index] + 1
                따봉변경(copy2)     }}>  👍</span> {따봉[index]}</h4>
              <p>{글날짜[index]}</p>

            </div>
            );
        })}

        {
          modal == true? <Modal 글제목={글제목} color={'skyblue'} 글제목변경={글제목변경} title={title}/> : null
        }
        <h4>{post}</h4>
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal" style={{background : props.color}}>
          <h4>{props.글제목[props.title]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={()=>{ props.글제목변경(['여자코트 추천','강남 우동맛집','파이썬독학']) }}>글수정</button>
    </div>
  )
}

export default App;
