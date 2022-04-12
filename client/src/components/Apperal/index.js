import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import food1 from '../../assets/food/food1.png';
import food2 from '../../assets/food/food2.png';
import food3 from '../../assets/food/food3.png';
import food4 from '../../assets/food/food4.png';
import food5 from '../../assets/food/food5.png';
import food6 from '../../assets/food/food6.png';



function Apperal() {
  const [restaurants] = useState([
    {
      name: 'Best Kept Secret Bar & Entertainment',
      url: 'https://www.facebook.com/pages/category/Bar/Best-Kept-Secret-Bar-and-Grill-156375474461844/',
      image: food1,
      description: 'The home of the best burgers and free birthday parties. 1932 Taylor Road, Cleveland Heights, OH 44118 Cleveland Heights, OH 44118.'
    },
    {
      name: 'P.Js Luncheonette',
      url: 'https://www.pjssandwiches.com/',
      image: food2,
      description: 'Friendly staff, delicious coffee, and if you sit at the bar you can see how freshly made everything is.',
    },
    {
      name: 'Red Walters B.B.Q.',
      url: 'https://www.redwaltersllc.com/',
      image: food3,
      description: 'Best Wings, Best BBQ in Town, Best Seafood in Town. We Now have a luxury Event Center in our New Lakeshore Location'
    },
    {
      name: 'Ms. Es Glory Loaves (Cinnamon Raisin Bread)',
      url: 'https://gloryloaves.webs.com/',
      image: food4,
      description: 'Our mission is simple, spread the Glory with Cinnamon Raisin, Banana & Zucchini Bread. New Year, New Items.',
    },
    {
      name: 'Miss Macs Cuisine',
      url: 'https://www.mrsmacskitchen.com/menu',
      image: food5,
      description: 'Specialties · Fresh Fish & Grits · Lobster & Grits · The "Mac" Attack · Paulas Texas Benedict · Eggs Benedict · Crab Cake Benedict · Mrs. Macs Famous Mornwich.'
    },
    {
      name: 'Xecutive Ultra Lounge',
      url: './assets/food1.jpeg',
      image: food6,
      description: 'Try the Home Made Root Beer!'
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

export default Apperal;