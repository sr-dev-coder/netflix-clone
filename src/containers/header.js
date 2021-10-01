import { Header, Features, OptForm } from "../components";
import logo from '../logo.svg'; 
import * as Routes from '../constants/routes';

export const HeaderContainer = () =>{
    return(
        <Header>
            <Header.Frame>
                <Header.Logo src={logo} to={Routes.Home} alt="Netflix" />
                <Header.ButtonLink to={Routes.SignIn}>SignIn</Header.ButtonLink>
            </Header.Frame>
            <Features>
                <Features.Title>Unlimited movies, TV shows and more.</Features.Title>
                <Features.SubTitle>Watch anywhere. Cancel anytime.</Features.SubTitle>
                <OptForm>
                    <OptForm.Title>Ready to watch? Enter your email to create or restart your membership.</OptForm.Title>
                    <OptForm.Input placeholder="Enter your email" />
                    <OptForm.Button>Get Started 
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </OptForm.Button>
                </OptForm>
            </Features>
        </Header>
    )
}