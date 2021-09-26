import { Accordian } from '../components';
import faqData from './../data/faq.json';

export const FaqContainer = () =>{
    return (
        <Accordian>
            <Accordian.Container>
                <Accordian.Title>Frequently Asked Questions</Accordian.Title>
                <Accordian.FaqList>
                    {
                        faqData.map(({id, title, content}) => (
                            <Accordian.FaqListItem key={id}>
                                <Accordian.Header>{title}</Accordian.Header>
                                <Accordian.Body>{content}</Accordian.Body>
                            </Accordian.FaqListItem>
                        ))
                    }                    
                </Accordian.FaqList>
            </Accordian.Container>
        </Accordian>
    )
}