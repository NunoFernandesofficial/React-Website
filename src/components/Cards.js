import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Vê estes locais Incriveis para Visitar</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explora a cascata escondida dentro da Floresta da Amazonia'
              label='Aventura'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Viaja pelas Ilhas de Bali num cruseiro privado'
              label='Luxo'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Dá um mergulho nas aguas menos visitadas do Oceano Atlantico'
              label='Mistério'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experimenta jogar futebol no topo das montanhas Himalayas'
              label='Aventura'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Anda pelo deserto num caminho guiado pelo teu camelo'
              label='Adrenalina'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
