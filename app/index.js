const { DynamoDB } = require('aws-sdk');

module.exports.poll = async evt => {
  return { statusCode: 500, body: JSON.stringify({ error: 'Not Implemented' }) }
};

module.exports.fetch = async evt => {
  return { statusCode: 500, body: JSON.stringify({ error: 'Not Implemented' }) }
};
