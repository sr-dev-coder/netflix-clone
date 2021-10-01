import styled from 'styled-components/macro';

export const Inner = styled.section`
    border-top: 0.8rem solid #222;
    padding: 7rem 4.5rem;
`;

export const Container = styled.div`
    margin: 0 auto;
    width:100%;
`;

export const Title = styled.h2`
    font-size: 5rem;
    line-height: 1.1;
    margin-bottom: .8rem;
    text-align:center;
    color:#fff;

    @media(max-width: 949px){
        font-size:4rem;
    }
    @media(max-width: 549px){
        font-size:2.6rem;
    }
`;

export const FaqList = styled.ul`
    width: 75%;
    margin: 3.2rem auto 5rem;
    max-width:81.5rem;
    padding:0px;
    @media(max-width: 949px){
        width: 90%;
    }
    @media(max-width: 549px){
        width: 100%;
    }
`;
export const FaqListItem = styled.li`
    list-style-type: none;
    margin: 0 0 8px 0;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 2.6rem;
    font-weight: normal;
    background: #303030;
    padding:1.8rem 3.6rem 1.8rem 3rem;
    user-select: none;
    align-items: center;
    color:#fff;
    img {
            
            width: 2.4rem;
            @media (max-width: 600px) {
                width: 1.6rem;
            }
    }
    @media (max-width: 600px){
        font-size: 1.6rem;
    }
`;
export const Body = styled.div`
    font-size: 2.6rem;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    white-space: pre-wrap;
    user-select: none;
    overflow: hidden;
    color:#fff;

    &.closed {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    &.open {
        max-height: 1200px;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }
    span {
        display: block;
        padding: 2rem;
    }
    @media (max-width: 600px) {
        font-size: 1.6rem;
        line-height: 2.2rem;
    }
`;