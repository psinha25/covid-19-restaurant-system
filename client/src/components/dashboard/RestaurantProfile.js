import React from 'react';
import { Jumbotron, Container, Badge, Row, Col } from 'reactstrap';
import '../../styles/Restaurants.scss';

const RestaurantProfile = ({
  restObj: {
    restaurant_name,
    address,
    dine_in,
    dine_outside,
    pickup,
    curbside_pickup,
    delivery,
    policy_notes,
    employee_capacity,
    customer_capacity,
    restaurant_email,
    restaurant_phone_number,
  },
}) => {
  return (
    <div id='restaurant-profile'>
      <Jumbotron>
        <Container className='my-4'>
          <Row className='header-wrapper'>
            <Col xs='12' lg='3'>
              <div className='logo-wrapper'>
                <img
                  src='https://images.squarespace-cdn.com/content/v1/578d4c7a8419c227c750b539/1572971173664-VMLWSYNF0B1T0WT99MT5/ke17ZwdGBToddI8pDm48kDldiTmRHKJ5v0YqxgeTKYoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcILJf9YR3LP5aM5G6UY-AAu_ngb_bs84XNd2m-CICIhr-FNO5NkILC6XZG9VcRQgL/Milk+Tea_smaller+v2.jpg'
                  alt='Restaurant logo'
                />
              </div>
            </Col>
            <Col xs='12' lg='9'>
              <div className='basic-info'>
                <h1 className='header'>{restaurant_name}</h1>
                <p className='info-text'>{address}</p>
                <div className='badges'>
                  {dine_in ? (
                    <Badge color='light'>
                      Dine in <i class='fas fa-check-square'></i>
                    </Badge>
                  ) : (
                    <Badge color='light'>
                      Dine in <i class='fas fa-times-circle'></i>
                    </Badge>
                  )}
                  {dine_outside ? (
                    <Badge color='light'>
                      Dine outside <i class='fas fa-check-square'></i>
                    </Badge>
                  ) : (
                    <Badge color='light'>
                      Dine outside <i class='fas fa-times-circle'></i>
                    </Badge>
                  )}
                  {pickup ? (
                    <Badge color='light'>
                      Pickup <i class='fas fa-check-square'></i>
                    </Badge>
                  ) : (
                    <Badge color='light'>
                      Pickup <i class='fas fa-times-circle'></i>
                    </Badge>
                  )}
                  {curbside_pickup ? (
                    <Badge color='light'>
                      Curbside pickup <i class='fas fa-check-square'></i>
                    </Badge>
                  ) : (
                    <Badge color='light'>
                      Curbside pickup <i class='fas fa-times-circle'></i>
                    </Badge>
                  )}
                  {delivery ? (
                    <Badge color='light'>
                      Delivery <i class='fas fa-check-square'></i>
                    </Badge>
                  ) : (
                    <Badge color='light'>
                      Delivery <i class='fas fa-times-circle'></i>
                    </Badge>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Row>
        <Col xs='12' lg='4'>
          <div className='left-panel'>
            <div className='contact-info'>
              <div className='msg-text'>
                <h1>Contact</h1>
                <p>Email: {restaurant_email}</p>
                <p>Tel: {restaurant_phone_number}</p>
              </div>
            </div>
            <div className='map-wrapper'></div>
          </div>
        </Col>
        <Col xs='12' lg='4'>
          <h1>Graph</h1>
        </Col>
        <Col xs='12' lg='4'>
          <div className='detailed-info'>
            <div className='msg-text'>
              <h1>Policy</h1>
              <p>{policy_notes}</p>
            </div>
            <div className='msg-text mt-5'>
              <h1>Capacity</h1>
              <p>Employee capacity: {employee_capacity}</p>
              <p>Customer capacity: {customer_capacity}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RestaurantProfile;