import './CardContainer.css';
import Declarative from '../Cards/Declarative';
import Components from '../Cards/Components';
import JSX from '../Cards/JSX';
import SingleWay from '../Cards/SingleWay';

function CardContainer () {
    return (
        <div className='body-container'>   
            <Declarative />
            <Components />
            <SingleWay />
            <JSX />  
        </div>
    )
}

export default CardContainer;
  