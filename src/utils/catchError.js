const catchError = (err, code, res) => {
  return res.status(code).json({msg: err})
}

module.exports = catchError