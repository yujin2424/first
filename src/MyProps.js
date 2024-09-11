import React from 'react';

const MyProps= ({name,children}) => {
    
    return (
        <div>
           안녕하세요 제 이름은 {name}입니다. <br />
           childern 값은 {children}입니다.
        </div>
    );
};
MyProps.defaultProps={
    name : '기본이름'
}

export default MyProps;