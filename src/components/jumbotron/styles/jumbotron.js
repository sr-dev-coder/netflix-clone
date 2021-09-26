import styled from 'styled-components/macro';

export const Inner = styled.section`
    border-top: 0.8rem solid #222;
    position: relative;
    padding: 7rem 4.5rem;
    color: #fff;
`
export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: space-between;
        -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    
    
    &.row-reverse{        
        @media(min-width:950px){
            flex-direction:row-reverse;
        }
    }

    @media(max-width:949px){
        flex-direction:column;
        text-align:center;
    }
    
    
`;

export const ColumnText = styled.div`
    width: 100%;
    height: 100%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -moz-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    padding: 0 3rem 0 0;
    z-index: 3;
    p{
        font-size:2.6rem;
        line-height:1.3;
        @media(max-width: 949px){
            font-size:2rem;
        }
        @media(max-width: 549px){
            font-size:1.8rem;
        }
    }
    @media(min-width: 950px){
        width: 52%;
    }
`;

export const ColumnImg = styled.div`
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -moz-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    @media(min-width: 950px){
        width: 52%;
    }
`;

export const Title = styled.h2`
    font-size:5rem;
    line-height: 1.1;
    margin-bottom: .8rem;
    color:#fff;

    @media(max-width:949px){
        font-size:4rem;
    }
    @media(max-width: 549px){
        font-size:2.6rem;
    }
`;
