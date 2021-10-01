import { Accordian, OptForm } from '../components';
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

                <OptForm>
                    <OptForm.Title>Ready to watch? Enter your email to create or restart your membership.</OptForm.Title>
                    <OptForm.Input placeholder="Enter your email" />
                    <OptForm.Button>Get Started 
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </OptForm.Button>
                </OptForm>

            </Accordian.Container>
        </Accordian>
    )
}