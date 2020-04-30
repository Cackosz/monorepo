'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'MONOREPOOSS!',
        input: event,
      },
      null,
      2
    ),
  };
};
