import PropTypes from 'prop-types';
import { Component } from 'react';

// 함수형 컴포넌트
// const MyComponent = ({name, children}) => {
//     return (<div>안녕하세요 제 이름은 {name} 입니다. <br/>
//     children 값은 {children} 입니다.
//     </div>);
// }

// 비구조화 할당 문법
// const MyComponent = ({name,number,children}) => {
//     return (<div>안녕하세요 제 이름은 {name} 입니다. <br/>
//     children 값은 {children} 입니다.
//     제가 좋아하는 숫자는 {number} 입니다.
//     </div>);
// }

// 클래스형 컴포넌트
class MyComponent extends Component {
    render() {
        const {name, number, children} = this.props;
        return (<div>안녕하세요 제 이름은 {name} 입니다. <br/>
        children 값은 {children} 입니다. <br/>
        제가 좋아하는 숫자는 {number} 입니다.
        </div>)
    }
}
MyComponent.defaultProps = {
    name : "기본 이름"
};
// 프롭타임으로 검사
MyComponent.PropTypes = {
    name : PropTypes.string,
    number : PropTypes.number.isRequired
}
export default MyComponent