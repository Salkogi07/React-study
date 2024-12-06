import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import MyComponent from './MyComponent';

//함수 컴포넌트 선언
function App() {
  return <MyComponent name={3}>리액트</MyComponent>;
}

// 클래스형 컴포넌트 
// state 기능을 사용할수가 있다.
// class App extends Component{
//   render() {
//     const name = 'react';
//     return <div className='react'>{name}</div>;
//   }
// }
export default App;
