import React from 'react';

import { Title, Container, Input, Button } from './styles/optForm';

export default function OptForm({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

OptForm.Title = function OptFormTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

OptForm.Input = function OptFormInput({...restProps}){
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({ children, ...restProps }){
    return <Button {...restProps}>{children}</Button>
}