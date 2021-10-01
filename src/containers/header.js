import { Header } from "../components";
import logo from '../logo.svg'; 
import * as Routes from '../constants/routes';

export const HeaderContainer = () =>{
    return(
        <Header>
            <Header.Frame>
                <Header.Logo src={logo} to={Routes.Home} alt="Netflix" />
                <Header.ButtonLink>SignIn</Header.ButtonLink>
            </Header.Frame>
        </Header>
    )
}