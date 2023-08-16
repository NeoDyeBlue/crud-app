/**
 * Sends an error response in json format
 * @param {Object} req
 * @param {Object} res
 * @param {string} errorMessage
 * @param {number} code
 * @param {Object} error
 */

export function errorResponse(
  req,
  res,
  errorMessage = "Something went wrong",
  code = 500,
  error = {}
) {
  res.status(code).json({
    code,
    errorMessage,
    error,
    data: null,
    success: false,
  });
}

/**
 * Sends a success response in json format
 * @param {Object} req
 * @param {Object} res
 * @param {Object} data
 * @param {number} code
 */

export function successResponse(req, res, data, code = 200) {
  res.send({
    code,
    data,
    success: true,
  });
}
