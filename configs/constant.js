module.exports = {
  ERRORS: {
    INVALID_TOKEN: {
      err_code: 11,
      text: 'Invalid Token'
    },
    NO_TOKEN: {
      err_code: 12,
      text: 'No Token'
    }
  },
  CACHE: {
    LOW_TIME: 600,
    HIGH_TIME: 10800,
    MINUTE: (min) => { return min * 60 },
    HOUR: (hour) => { return hour * 60 * 60 }
  }
}
