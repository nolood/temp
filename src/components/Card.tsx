import { useState } from 'react';

const Card = ({ front, back }: { front: string; back: string }) => {
  const [isCheckCard, setIsCheckCard] = useState<boolean>(false);

  const handleClick = () => {
    setIsCheckCard(!isCheckCard);
  };

  const className = `card ${isCheckCard ? 'card-check' : ''}`;

  return (
    <div className={className} onClick={handleClick} data-back={back}>
      {front}
    </div>
  );
};

export default Card;
