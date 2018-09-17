exports.main = async (event, context) => {
    return {
      sum: event.a + event.b
    }
  }