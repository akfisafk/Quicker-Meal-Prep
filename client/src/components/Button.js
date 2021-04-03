import styled from 'styled-components';

export const Button = styled.button`
    background-color: #d94234;
    color: white;
    width: 120px;
    height: 60px;
    margin: 0 10px;
    outline: none;
    border: none;
    box-shadow: 0 5px 4px #9e9d9d;
    transition: all .1s ease;
    &:hover {
        transition: all .2s ease;
        box-shadow: 0 5px 8px #9e9d9d;
        font-size: 13.3px;
        background-color: #c93c2e;
        cursor: pointer;
    }
`
