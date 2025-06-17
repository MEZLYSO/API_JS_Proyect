
function sendSucess(res, data) {
  return res.status(200).json({
    status: "sucess",
    data,
  })
}

function sendError(res, message, statusCode) {
  return res.status(statusCode).json({
    sucess: false,
    data: null,
    error: message
  })
}

module.exports = { sendError, sendSucess }
