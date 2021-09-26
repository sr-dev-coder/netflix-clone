import React from 'react';
import { Inner, Container, ColumnText, ColumnImg, Title } from './styles/jumbotron';

export default function Jumbotron({ children, ...restProps}){
    return <Inner {...restProps}>{children}</Inner>
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.ColumnText = function JumbotronColumnText({ children, ...restProps}){
    return <ColumnText {...restProps}>{children}</ColumnText>
}

Jumbotron.ColumnImg = function JumbotronColumnImg({ children, ...restProps}){
    return <ColumnImg {...restProps}><img src={children} alt="" /></ColumnImg>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}