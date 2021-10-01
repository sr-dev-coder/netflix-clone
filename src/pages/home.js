import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqContainer } from '../containers/faq';
import { FooterContainer } from '../containers/footer';

const Home = () =>{
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  )
}

export default Home
