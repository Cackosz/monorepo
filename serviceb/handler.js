'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World MONOREPO!',
        input: event,
      },
      null,
      2
    ),
  };
};
