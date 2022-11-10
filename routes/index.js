var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/:id", function (req, res, next) {
  var axios = require("axios");

  var config = {
    method: "get",
    url: `http://localhost:6565/campaign/id/${req.params.id}`,
  };

  axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
});

module.exports = router;
