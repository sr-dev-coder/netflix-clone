import React from 'react';
import { Inner, Container, Title, Lists, ListItem, ListItemTag } from './styles/footer';

export default function Footer({ children, ...restProps }){
    return <Inner {...restProps}>{children}</Inner>;
}

Footer.Container = function FooterContainer({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Footer.Title = function FooterTitle({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

Footer.Lists = function FooterLists({ children, ...restProps }){
    return <Lists {...restProps}>{children}</Lists>;
}

Footer.ListsItem = function FooterListsItem({ children, ...restProps }){
    return <ListItem>
            <ListItemTag {...restProps}>{children}</ListItemTag>
        </ListItem>
}