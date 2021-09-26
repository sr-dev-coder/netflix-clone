import { Jumbotron } from '../components';
import homeData from './../data/home.json';

export const JumbotronContainer = () =>{
    return(
        <>
            {
                homeData.map((data)=>(
                    <Jumbotron key={data.id}>
                        <Jumbotron.Container className={data.direction}>
                            <Jumbotron.ColumnText>
                                <Jumbotron.Title>{data.title}</Jumbotron.Title>
                                <p>{data.content}</p>
                            </Jumbotron.ColumnText>
                            <Jumbotron.ColumnImg>{data.thumbnail}</Jumbotron.ColumnImg>
                        </Jumbotron.Container>
                    </Jumbotron>
                ))
            }
        </>
    )
}