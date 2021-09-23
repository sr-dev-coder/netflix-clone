import styled from 'styled-components/macro';

export const Inner = styled.div`
    border-top: 0.8rem solid #222;
`;
export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 7rem 4.5rem;
`;

export const Title = styled.p`
    font-size: 1.6rem;
    color: #757575;
    margin-bottom:3rem;
    margin-top:0rem;
`;

export const Lists = styled.ul`
    width:100%;
    padding:0px;
    margin:0px;
    margin-bottom:1.6rem;
`;

export const ListItem = styled.li`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin-bottom: 1.6rem;
    display: inline-block;
    min-width: 10rem;
    width: 25%;
    padding-right: 1.2rem;
    vertical-align: top;
    list-style: none;
    margin-left: 0;

    @media(max-width:742px){
        width:33.333%;
    }
    @media(max-width:500px){
        width:50%
    }
`;

export const ListItemTag = styled.a`
    color:#757575;
    font-size:1.3rem;
    text-decoration:inherit;

    &:hover{
        text-decoration:underline;
    }
`;