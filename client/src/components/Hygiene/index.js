import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import hygiene1 from '../../assets/hygiene/hygiene1.png';
import hygiene2 from '../../assets/hygiene/hygiene2.png';
import hygiene3 from '../../assets/hygiene/hygiene3.png';
import hygiene4 from '../../assets/hygiene/hygiene4.png';



function Hygiene() {
  const [restaurants] = useState([
    {
      name: 'Santarellis Barbershop',
      url: 'https://santarellisbarbershop.com',
      image: hygiene1,
      description: 'Santarellis Barbershop has been a prominent barbershop in the Columbus neighborhood of Clintonville since 1984. '
    },
    {
      name: 'QUEEN BEES',
      url: 'https://www.qbroyalhair.com/',
      image: hygiene2,
      description: 'Queen Bees Royal Hair Gallery stands in solidarity against racism and the abuse of power that has been impressed upon Black Americans.',
    },
    {
      name: 'Limitless Barbershop',
      url: 'https://booksy.com/en-us/92522_limitless-barbershop_barber-shop_134589_columbus?do=invite&_branch_match_id=647612687939195580&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV9%2Fcq8ikrMnVJyU0CAJOE%2FjAiAAAA',
      image: hygiene3,
      description: 'Professional yet relaxed atmosphere and S+ level service. The place has a modern internal aesthetic, keeping up with the times and it is welcoming.'
    },
    {
      name: 'Straight Cuts Barber Shop',
      url: 'https://straight-cuts-barbershop.business.site/',
      image: hygiene4,
      description: 'Stop in to check out our barbers. We offer everything you want from a barbershop. From a hot towel shave and facial. To fades, tapers, mohawks, combovers, razor fades, and custom hair art known as Designs',
    }
  ]);
  return (
    <>
      <div className="container  flex-row mx-4">
        {restaurants.map((restaurant, i) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={restaurant.image} key={restaurant.name} />
            <Card.Body>
              <Card.Title className='p'>{restaurant.name}</Card.Title>
              <Card.Text >
                {restaurant.description}
              </Card.Text>
              <Button href={restaurant.url} target="blank">Check it Out!</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

    </>
  );
}

export default Hygiene;