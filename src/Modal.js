import React from 'react'

const Modal = (props) => {


    return (
        <>
            <div className='modal' style={{background : props.color}}>
                <h4>{props.sendTitle}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={props.changeTitle}>변경</button>
            </div>
        </>
    )
}

export default Modal
