import { Monster } from '../../App';

import Card from '../card/card.component';

import './card-list.styles.css';

interface CardListProps {
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
};

export default CardList;
