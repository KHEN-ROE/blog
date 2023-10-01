import Modal from './Modal';
import {useState} from 'react';
import './App.css';

function App() {

    let [title, setTitle] = useState(['남자 코트 추천', '여자 코트 추천', '강남 맛집 추천']);
    let [like, setLike] = useState(0);
    let [modal, setModal] = useState(false);
    let [sendTitle, setSendTitle] = useState('');
    let [input, setInput] = useState('');

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

    const showModal = (title) => {
        setSendTitle(title);
        setModal(!modal);
    }

    const addTitle = () => {
        let copy = [...title];
        copy.unshift(input);
        setTitle(copy);
    }

    const deleteTitle = (titleValue) => {
        let copy = [...title];
        for (let i = 0; i<copy.length; i++) {
            if(copy[i] === titleValue) {
                copy.splice(i, 1);
                i--;
            }
        }
        setTitle(copy);
    }

    return (
        <div className="App">
            <div className='black-nav'>
                <h4 style={{color: 'red', fontSize: '16px'}}>React Blog</h4>
            </div>
            <div>
                <button onClick={sortTitle}>정렬</button>
            </div>

            {
                title.map(function (a, i) { // i는 1씩 증가하는 인덱스
                    return (
                        <div className='list'>
                            <h4><span onClick={() => {
                                showModal(title[i])
                            }}>{title[i]}</span> <span onClick={addLike}>👍</span> {like} </h4>
                            <p>2월 17일 발행 <button onClick={() => {deleteTitle(title[i])}}>삭제</button> </p>

                        </div>
                    )
                })
            }
                <input type={"text"} onChange={(e) => {
                    setInput(e.target.value)
                }}></input>
                <button onClick={addTitle}>전송</button>
            <div>
                {modal ? <Modal sendTitle={sendTitle} color={'yellow'} changeTitle={changeTitle}/> : null}
            </div>

        </div>
    );
}

export default App;
