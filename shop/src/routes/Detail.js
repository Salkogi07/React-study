import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';


// let Box = styled.div`
//     padding : 20px;
//     color : grey;
// `;

// let YelloBtn = styled.button`
//     background : ${props => props.bg};
//     color : black;
//     padding : 10px
// `;

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


    return (
        <div className="container">
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
                        <YelloBtn bg="orange" onClick={() => {setCount(count+1)}}>오렌지 버튼</YelloBtn>
                        <YelloBtn bg="blue">파랑 버튼</YelloBtn>
                        {alert == true ? <YelloBtn bg="Yellow">노란년</YelloBtn> : null}
                    </Box> */}
                    <Nav variant= "tabs" defaultActiveKey="link0">
                        <Nav.Item>
                            <Nav.Link eventKey="link0">버튼 0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link1">버튼 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link2">버튼 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div>내용 0</div>
                    <div>내용 1</div>
                    <div>내용 2</div>
                </div>
            </div>
        </div>
    )
}
export default Detail;