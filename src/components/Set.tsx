import { cards } from '@/utils/cards';
import { useState } from 'react';
import Card from './Card';

const Set = () => {
  const [step, setStep] = useState<number>(0);
  const nextSlide = () => {
    if (step === cards.length - 1) {
      setStep(0);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (step === 0) {
      setStep(cards.length - 1);
    } else {
      setStep((prev) => prev - 1);
    }
  };
  return (
    <div>
      <h2>Название набора</h2>
      <Card front={cards[step].front} back={cards[step].back} />
      <div className='panel'>
        <button onClick={prevSlide}>{'<'}</button>
        {step} / {cards.length - 1}
        <button onClick={nextSlide}>{'>'}</button>
      </div>
    </div>
  );
};

export default Set;
