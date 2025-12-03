import React, {useState} from 'react'



import './App.css'

function App() {
    let [blog, setBlog]=useState(['명품가방추천','명품신발추천','명품시계추천','주얼리','모자'])
   let [cnt, setCnt]=useState(0)
   let [modal, setModal]=useState(false)

   
    
    return (
      <div className="App">
      <div className="black-nav">
         <h4>블로그 만들기</h4>
      </div>
      <button onClick={()=>{
         let copy=[...blog];
         copy[0]='여름명품추천';
         setBlog(copy);

      }}>
         글수정
      </button>
      <button onClick={()=>{
         let copy=[...blog]
         copy.sort();
         setBlog(copy)
      }}>
         정렬하기
      </button>
      {/* <div className="list">
         <h4>{blog[0]} <span onClick={()=>{setCnt(cnt+1)}}>❤ </span>{cnt}</h4>
         <p>2025 12 03 발행</p>
      </div>
      <div className="list">
         <h4>{blog[1]} <span onClick={()=>{setCnt(cnt+1)}}>❤ </span>{cnt}</h4>
         <p>2025 12 03 발행</p>
      </div>
      <div className="list">
         <h4 onClick={()=>{setModal(!modal)}}>{blog[2]} <span onClick={()=>{setCnt(cnt+1)}}>❤ </span>{cnt}</h4>
         <p>2025 12 03 발행</p>
      </div> */}
      {
         modal===true ? <Modal/> : null
      }
      {
         blog.map(function(a){
            return (
               <div className="list">
                  <h4>{a}</h4>
                  <p>2025 12 03 발행</p>
               </div>
            )
         })
      }
      </div>
    )
}

function Modal(){
   return (
      <div className="modal">
         <h2>제목</h2>
         <p>날짜</p>
         <p>상세내용</p>
      </div>
   )
}

export default App
