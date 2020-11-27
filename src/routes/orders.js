const router = require("express").Router();

module.exports = (helpers) => {
  router.get("/orders", (req, res) => {
    helpers
      .getOrders()
      .then((data) => res.send(data))
      .catch((err) => res.status(400).send(err));
  });
  router.put("/orders", (req, res) => {
    const order = req.body;
    helpers
      .createOrder(order)
      .then((data) => {
        setTimeout(() => {
          res.send(data);
        }, 5000);
      })
      .catch((err) => res.status(400).send(err));
  });

  router.patch("/orders/:id", (req, res) => {
    const order = req.body;

    console.log("order :", order);
    helpers.changeOrder(order).then((data) => res.send(data));
  });
  return router;
};
