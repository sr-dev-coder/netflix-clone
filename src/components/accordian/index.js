import React, { useState, useContext, createContext } from 'react';

import { Inner, Container, Title, FaqList, FaqListItem, Header, Body } from './styles/accordian';

const ToggleContext = createContext();


export default function Accordian({ children, ...restProps }){
    return <Inner {...restProps}>{children}</Inner>
}

Accordian.Container = function AccordianContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Accordian.Title = function AccordianTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordian.FaqList = function AccordianFaqList({children, ...restProps}){
    return <FaqList {...restProps}>{children}</FaqList>
}

Accordian.FaqListItem = function AccordianFaqListItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <FaqListItem {...restProps}>{children}</FaqListItem>
        </ToggleContext.Provider>
    )
}

Accordian.Header = function AccordianHeader({children, ...restProps}){
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {
                toggleShow ? 
                <img src="/images/icon/close.jpg" alt="" /> :
                <img src="/images/icon/plus.jpg" alt="" />
            }
    </Header>
}

Accordian.Body = function AccordianBody({children, ...restProps}){
    const { toggleShow } = useContext(ToggleContext);
    return <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
        <span>{children}</span>
    </Body>
}

