// export object
module.exports = {
  /*
      Helper function to send 500 status to the client with error message
    */
  sendError: function (err, req, res) {
    res.status(500).send({ error: err })
  }
}
