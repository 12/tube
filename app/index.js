const fetch = require('node-fetch');
const { DynamoDB } = require('aws-sdk');

const API = 'https://api.tfl.gov.uk/line/mode/tube%2Cdlr%2Coverground%2Ctflrail%2Ctram%2Ccable-car/status';

module.exports.poll = async evt => {
  const transformData = data => 
    data.map(({ name, lineStatuses: [{ statusSeverity, reason = null }] }) => ({ name, statusSeverity, reason }))

  const data = await fetch(API)
    .then(data => data.json())
    .then(transformData)

  return { statusCode: 200, body: JSON.stringify({ data, timestamp: Date.now() }) }
};

module.exports.fetch = async evt => {
  return { statusCode: 500, body: JSON.stringify({ error: 'Not Implemented' }) }
};
