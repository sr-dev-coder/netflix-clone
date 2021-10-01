import React from 'react';
import { Frame, Title, SubTitle } from './styles/features';

export default function Features({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>;
}

Features.Title = function FeaturesTitle({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Features.SubTitle = function FeaturesSubtitle({ children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}