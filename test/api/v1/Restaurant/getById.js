const mongoose = require('mongoose');
const request = require('supertest');
const expect = require('chai').expect;
const supertestPrefix = require('supertest-prefix').default;
const app = require('../../../../server');

const data0 = {
  first_name: 'Cecelia',
  last_name: 'Peterson',
  username: 'cpeterson3663',
  email: 'anemail@wisc.edu',
  phone_number: '222-222-2222',
  password: 'apassword1',
  confirmed_password: 'apassword1',
  restaurant_name: "Cela's Restauranttt",
  avatar: 'avater.jpg',
  address: '1 University Avenue',
  restaurant_email: 'rest_email@gmail.com',
  restaurant_phone_number: '111-111-1111',
  cuisine: 'vegan',
  website_url: 'awebsite.com',
  dine_in: 0,
  dine_outside: 0,
  pickup: 0,
  curbside_pickup: 1,
  delivery: 0,
  policy_notes: 'keep your mask over your nose!',
  employee_capacity: 10,
  customer_capacity: 10,
  number_tables: 7,
  square_footage: 500,
  customer_per_table: 10,
  tables_distance: 10,
};

module.exports = getById = () => {
  describe('GET /restaurants/:restaurant_id (getById)', () => {
    let restaurantId;
    const prefix = supertestPrefix('/api/v1');

    before((done) => {
      mongoose.connection.dropCollection('users');
      mongoose.connection.dropCollection('restaurants');
      request(app)
        .post('/restaurants')
        .use(prefix)
        .send(data0)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          restaurantId = res.body.restaurant._id;
          done();
        });
    });

    after((done) => {
      mongoose.connection.dropCollection('users', () => {
        mongoose.connection.dropCollection('restaurants', () => {
          done();
        });
      });
    });

    it('1. should return current restaurants with an id', (done) => {
      request(app)
        .get('/restaurants/' + restaurantId)
        .use(prefix)
        .set({ Accept: 'application/json' })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);

          const {
            restaurant_name,
            avatar,
            address,
            restaurant_email,
            restaurant_phone_number,
            cuisine,
            website_url,
            dine_in,
            dine_outside,
            pickup,
            curbside_pickup,
            delivery,
            policy_notes,
            employee_capacity,
            customer_capacity,
            number_tables,
            square_footage,
            customer_per_table,
            tables_distance,
          } = data0;

          expect(res.body).to.have.property('_id').to.equal(restaurantId);
          expect(res.body).to.have.property('reviewed').to.be.false;
          expect(res.body)
            .to.have.property('restaurant_name')
            .to.equal(restaurant_name);
          expect(res.body).to.have.property('address').to.equal(address);
          expect(res.body).to.have.property('avatar').to.equal(avatar);
          expect(res.body)
            .to.have.property('website_url')
            .to.equal(website_url);
          expect(res.body)
            .to.have.property('restaurant_email')
            .to.equal(restaurant_email);
          expect(res.body)
            .to.have.property('restaurant_phone_number')
            .to.equal(restaurant_phone_number);
          expect(res.body).to.have.property('cuisine').to.equal(cuisine);
          expect(res.body).to.have.property('dine_in').to.equal(!!dine_in);
          expect(res.body)
            .to.have.property('dine_outside')
            .to.equal(!!dine_outside);
          expect(res.body).to.have.property('pickup').to.equal(!!pickup);
          expect(res.body)
            .to.have.property('curbside_pickup')
            .to.equal(!!curbside_pickup);
          expect(res.body).to.have.property('delivery').to.equal(!!delivery);
          expect(res.body)
            .to.have.property('employee_capacity')
            .to.equal(employee_capacity);
          expect(res.body)
            .to.have.property('customer_capacity')
            .to.equal(customer_capacity);
          expect(res.body)
            .to.have.property('policy_notes')
            .to.equal(policy_notes);
          expect(res.body)
            .to.have.property('number_tables')
            .to.equal(number_tables);
          expect(res.body)
            .to.have.property('square_footage')
            .to.equal(square_footage);
          expect(res.body)
            .to.have.property('customer_per_table')
            .to.equal(customer_per_table);
          expect(res.body)
            .to.have.property('tables_distance')
            .to.equal(tables_distance);
          done();
        });
    });

    it('2. should return error message if restaurant id not valid', (done) => {
      request(app)
        .get('/restaurants/abc')
        .use(prefix)
        .set({ Accept: 'application/json' })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(500);

          done();
        });
    });

    it('3. should return error message if restaurant id not valid', (done) => {
      request(app)
        .get('/restaurants/606d850e6f9e824a303a3004')
        .use(prefix)
        .set({ Accept: 'application/json' })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(404);

          done();
        });
    });
  });
};
