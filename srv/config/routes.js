/**
 * @param {import('express').Application} app
 * @param {import('express')} express
 */
module.exports = (app, express) => {
  /* TODO: Insert routes */

  app.get('/api/sample-data', (req, res) => {
    res
      .json([
        {
          name: 'Avocado',
          date: new Date(
            'Tue Nov 19 2019 03:18:39 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 51500'
        },
        {
          name: 'Watercress Sandwich',
          date: new Date(
            'Mon Nov 18 2019 14:19:19 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 94769'
        },
        {
          name: 'Flan',
          date: new Date(
            'Tue Nov 19 2019 00:53:10 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 8063'
        },
        {
          name: 'Calamari',
          date: new Date(
            'Tue Nov 19 2019 06:48:01 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 80302'
        },
        {
          name: 'Raspberry Lemon Meringue Pie',
          date: new Date(
            'Mon Nov 18 2019 18:13:36 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 50315'
        },
        {
          name: 'Baked Potato Soup',
          date: new Date(
            'Mon Nov 18 2019 21:25:39 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 60844'
        },
        {
          name: 'Oysters Rockefeller',
          date: new Date(
            'Tue Nov 19 2019 05:08:00 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 96062'
        },
        {
          name: 'Sticky Toffee Pudding',
          date: new Date(
            'Tue Nov 19 2019 05:17:26 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 26824'
        },
        {
          name: 'Chicken Fried Steak',
          date: new Date(
            'Tue Nov 19 2019 13:54:34 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 30743'
        },
        {
          name: 'Cinnamon Bread',
          date: new Date(
            'Tue Nov 19 2019 01:47:51 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 76938'
        },
        {
          name: 'Maple Bacon Doughnut',
          date: new Date(
            'Tue Nov 19 2019 12:36:01 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 60317'
        },
        {
          name: 'Bagel and Lox',
          date: new Date(
            'Tue Nov 19 2019 13:42:16 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 90855'
        },
        {
          name: 'Persimmon',
          date: new Date(
            'Mon Nov 18 2019 16:29:55 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 6004'
        },
        {
          name: 'Eggplant',
          date: new Date(
            'Tue Nov 19 2019 08:57:18 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 84439'
        },
        {
          name: 'Udon',
          date: new Date(
            'Mon Nov 18 2019 14:20:33 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 40027'
        },
        {
          name: 'Hibiscus Tea',
          date: new Date(
            'Tue Nov 19 2019 02:00:29 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 36423'
        },
        {
          name: 'Cactus Fries',
          date: new Date(
            'Tue Nov 19 2019 04:16:11 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 48592'
        },
        {
          name: 'Pomelo',
          date: new Date(
            'Mon Nov 18 2019 15:38:58 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 67703'
        },
        {
          name: 'Jumbalaya',
          date: new Date(
            'Mon Nov 18 2019 19:01:30 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 13282'
        },
        {
          name: 'Chicken Noodle Soup',
          date: new Date(
            'Tue Nov 19 2019 03:35:25 GMT-0500 (Eastern Standard Time)'
          ),
          location: 'Fridge 64460'
        }
      ])
      .status(200)
      .end()
  })
}
