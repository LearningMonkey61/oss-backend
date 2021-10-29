// Creating a module which accepts an request and validates it
const verify = (req) => {
  const { token } = req.headers;
  if (!token) {
    return false;
  }
  return true;
};

// Get weather data for a particaular city and state
const getWeatherData = (req, res, next) => {
  const { city, state } = req.query;
  if (!city || !state) {
    return res.status(400).json({
      status: 400,
      error: 'City and state are required',
    });
  }
  return next();
};

module.exports = { verify, getWeatherData };
