// Server routing.
const express = require('express');
const router = express.Router();

// Middleware.
const auth = require('../../../middleware/auth');

// Validation.
const { check } = require('express-validator');

// Restaurant controller.
const restaurantController = require('../controllers/restaurant');

// @route     POST /restaurants
// @desc      Create admin account and new restaurant
// @access    Public
router.post(
  '/',
  [
    // Data validations.
    check('first_name').notEmpty(),
    check('last_name').notEmpty(),
    check('username').notEmpty(),
    check('email', 'Please enter a valid email!').isEmail(),
    check('phone_number').notEmpty(),
    //Birthdate is a Date() object with YYYY/MM/DD format
    check('birth_date').notEmpty().isDate(),
    check('password')
      .isLength({ min: 6, max: 20 })
      .withMessage('Password must be between 6 and 20 characters long!')
      .matches(/\d/)
      .withMessage('Password must contain a number!'),
    check('confirmed_password').notEmpty(),

    check('restaurant_name').notEmpty(),
    check('address').notEmpty(),
    check('restaurant_email').notEmpty(),
    check('restaurant_phone_number').notEmpty(),
    check('website_url').optional().isURL(),
    check('dine_in').notEmpty().isIn([0, 1]),
    check('dine_outside').notEmpty().isIn([0, 1]),
    check('pickup').notEmpty().isIn([0, 1]),
    check('curbside_pickup').notEmpty().isIn([0, 1]),
    check('delivery').notEmpty().isIn([0, 1]),
    check('policy_notes').optional(),
    check('employee_capacity').notEmpty().isNumeric(),
    check('customer_capacity').notEmpty().isNumeric(),
    check('number_tables').notEmpty().isNumeric(),
    check('square_footage').isNumeric(),
    check('customer_per_table').isNumeric(),
    check('tables_distance').isNumeric(),
  ],
  restaurantController.create
);

// @route     PUT /restaurants
// @desc      Update restaurant info
// @access    Only admins of restaurant can do this.
router.put(
  '/',
  [
    auth,
    [
      check('restaurant_name').notEmpty(),
      check('address').notEmpty(),
      check('restaurant_email').notEmpty(),
      check('restaurant_phone_number').notEmpty(),
      check('website_url').optional().isURL(),
      check('dine_in').notEmpty().isIn([0, 1]),
      check('dine_outside').notEmpty().isIn([0, 1]),
      check('pickup').notEmpty().isIn([0, 1]),
      check('curbside_pickup').notEmpty().isIn([0, 1]),
      check('delivery').notEmpty().isIn([0, 1]),
      check('policy_notes').optional(),
      check('employee_capacity').notEmpty().isNumeric(),
      check('customer_capacity').notEmpty().isNumeric(),
      check('number_tables').notEmpty().isNumeric(),
      check('square_footage').isNumeric(),
      check('customer_per_table').isNumeric(),
      check('tables_distance').isNumeric(),
    ],
  ],
  restaurantController.update
);

// @route     PUT /restaurants/stats
// @desc      Update restaurant current number of
//            customers, employees, and free tables.
// @access    Only admins/staffs of restaurant can do this.
router.put(
  '/stats',
  [
    auth,
    [
      check('current_customers').notEmpty().isNumeric(),
      check('current_employees').notEmpty().isNumeric(),
      check('current_free_tables').notEmpty().isNumeric(),
    ],
  ],
  restaurantController.updateStats
);

// @route     DELETE /restaurants
// @desc      Delete restaurant
// @access    Only admin of restaurant can do this.
router.delete('/', auth, restaurantController.delete);

// @route     GET /restaurants
// @desc      Get all restaurants
// @access    Public.
router.get('/', restaurantController.getAll);

// @route     GET /restaurants/me
// @desc      Get my restaurant
// @access    Only admins/staffs of restaurant can do this.
router.get('/me', auth, restaurantController.getMy);

module.exports = router;
