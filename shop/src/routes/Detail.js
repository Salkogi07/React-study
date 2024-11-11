import { json, Link, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Nav } from "react-bootstrap";
import "../App.css";
import { 재고Context } from '../App.js';


// let Box = styled.div`
//     padding : 20px;
//     color : grey;
// `;

// let YelloBtn = styled.button`
//     background : ${props => props.bg};
//     color : black;
//     padding : 10px
// `;

function TabContent(props){
    let [fade, setFade] = useState('')
    useEffect(() => {
        setTimeout(() => {setFade('end')},100)
        return() =>{
            setFade('')
        }
    },[props.탭])
    return (
        <div className={'start '+fade}>
            {[<div>내용 0</div>,<div>내용 1</div>,<div>내용 2</div>][props.탭]}
        </div>
    )
}

function Detail (props) {
    // let [count,setCount] =useState(0);
    // useEffect(() => {
    //     console.log("안녕 하세요");
    // });

    // let [alert,setAlert] =useState(true);
    // useEffect(() =>{
    //     let timer = setTimeout(() => {
    //         setAlert(false)
    //     }, 2000);
    //     return () =>{
    //         clearTimeout(timer);
    //     }
    // }, [] )

    let {id} = useParams();
    let myItem = props.shoes.find((x) => {
        return x.id == id
    });

    let [탭,탭변경] = useState(0)

    let [fade2, setFade2] = useState('')

    useEffect(() =>{
        // let 꺼낸거 = localStorage.getItem('watched')
        // 꺼낸거 = JSON.parse(꺼낸거)
        // 꺼낸거.push(myItem.id)

        // 꺼낸거 = new Set(꺼낸거)
        // 꺼낸거 = Array.from(꺼낸거)
        // localStorage.setItem('watched',JSON.stringify(꺼낸거))
    }, [])

    useEffect(() => {
        setTimeout(() => {setFade2('end')},100)
        return() =>{
            setFade2('')
        }
    },[])

    let {재고} = useContext(재고Context)

    return (
        <div className={'container start '+fade2}>
            <div>{재고}</div>
            <div className="row">
                <div className="col-md-6">
                    <img src="/shoe1.png" width="100%"></img>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{myItem.title}</h4>
                    <p>{myItem.content}</p>
                    <p>{myItem.price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                <div>
                    {/* <Box>
                        <YelloBtn bg="orange" onClick={() => {setCount.apply(count+1)}}>오렌지버튼</YelloBtn>
                        <YelloBtn bg="blue">파란버튼</YelloBtn>
                        <YelloBtn bg="yellow" id="ye">d</YelloBtn>
                    </Box> */}
                    <Nav variant="tabs" defaultActiveKey="link0">
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼 0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent 탭={탭}/>
                </div>
            </div>
        </div>
    )
}
export default Detail;