import styled from 'styled-components/macro';

export const Title = styled.h3`
    font-size:1.8rem;
    padding-bottom:2rem;
    margin-bottom:0px;
    color:#fff;
    display:flex;
    max-width:100%;
    flex: 0 0 100%;
    text-align:center;
    justify-content:center;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 10px;
    height: 70px;
    box-sizing: border-box;
    font-size:1.6rem;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 70px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    border: 0;
    cursor: pointer;
    img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    
        @media (max-width: 1000px) {
            width: 16px;
        }
    }
    &:hover {
        background: #f40612;
    }
    & svg{
        margin-left: 1.6rem;
    }
    @media (max-width: 1000px) {
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }
`;