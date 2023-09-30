import Modal from './Modal';

import { useState } from 'react';
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '여자 코트 추천', '강남 맛집 추천']);
  let [like, setLike] = useState(0);

  const addLike = () => {
    setLike(++like);
  }

  const changeTitle = () => {
    let copy = [...title];
    copy[0] = '20대 남자 코트 추천';
    setTitle(copy);
  }

  const sortTitle = () => {
    let copy = [...title];
    copy.sort();
    setTitle(copy);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ color: 'red', fontSize: '16px' }}>React Blog</h4>
      </div>
      <div>
        <button onClick={sortTitle}>정렬</button>
      </div>
      <div className='list'>
        <h4>{title[0]} <span onClick={addLike}>👍</span> {like} 
            <button onClick={changeTitle}>변경</button> </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]} <span onClick={addLike}>👍</span> {like} </h4>

        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]} <span onClick={addLike}>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal />
    </div>
  );
}

export default App;
