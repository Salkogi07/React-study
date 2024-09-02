import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyComponent from './MyComponent';
// 6_10 추가 내용
import Counter from './counter';

const App = () => {
  return <Counter />;
}


// 함수 컴포넌트 선언
function App() {
  return <MyComponent name={3}>리액트</MyComponent>
}

// 클래스형 컴포넌트
// class App extends Component{
//   render() {
//     const name = 'react';
//     return <div className='react'>{name}</div>;
//   }
// }

export default App;
