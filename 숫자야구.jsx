// const React = require('react');
import React from 'react';
import Try from './try';

const getNumbers = () => {
    
    const numberArray = [];
    const answerArray = [];
    for (let i = 0; i < 9; i++) {
        numberArray.push(i + 1);
    }

    for (let i = 0; i < 4; i++) {
        const index = Math.floor((Math.random() * numberArray.length));
        answerArray.push(numberArray[index]);
        numberArray.splice(index, 1);
    }
    return answerArray;
}

function Baseball() {
    const [inputValue, setInputValue] = React.useState('');
    const [logs, setLogs] = React.useState('');
    const [answer, setAnswer] = React.useState(getNumbers());
    // const [numbers, setNumbers] = React.useState([]);
    const [tries, setTries] = React.useState([]);
    const [strike, setStrike] = React.useState(0);
    const [ball, setBall] = React.useState(0);

React.useEffect(() => {

},[strike, ball])

    const checkInput = (input) => {
        if(new Set(input).size !== 4) {
            return alert("중복되지 않게 입력해주세요!");
        }
        if(tries.includes(input)) {
            return alert("이미 시도한 값입니다.");
        }
        return true;
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(!checkInput(inputValue)) {
            return;
        }

        if(inputValue === answer.join('')) {
            setLogs('홈런!');
            setInputValue('');
            setLogs('');
            setTries('');
        } else {
            setTries([...tries, inputValue]);
            // console.log(tries)
        }

        if(tries.length >= 9) {
            setLogs(`10번 넘게 틀려서 실패! 답은 ${answer.join('')} 였습니다.`)
        }

        for (let i = 0; i < answer.length; i++) {
            const index = inputValue.indexOf(answer[i]);
            console.log('첫번째: ', index)
            if(index > -1) {
                 if(index === i) {
                    setStrike(prev => prev + 1);
                 } else {
                    setBall(prev => prev + 1);
                 }
                
                
                console.log('인덱스: ', index, '같음');
            } 
            
        }
        setLogs(`${inputValue}: ${strike} 스트라이크 ${ball} 볼!`);

    }
    console.log('answer: ', answer)
    
    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <form id="form" onSubmit={handleSubmitForm}>
                <input type="text" id="input" maxLength="4" value={inputValue} onChange={handleChangeInput} />
                <button>확인</button>
            </form>
            <div>시도 : {tries.length}</div>
            <div>{logs}</div>
            <ul>
                {
                    tries.map((data, index) => {
                        return <Try inputValue={data} index={index} />
                    })
                }
                
            </ul>
        </>
    );
}

// module.exports = Baseball;
export default Baseball;