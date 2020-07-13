'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=qqqla2dkife1n9ravthtl07ek0'
    + '&client_secret=587euh3uhufodvdl358f2p56mg'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://robinnicodemus.github.io'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  //change header on final build
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {
  const MEETUP_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=qqqla2dkife1n9ravthtl07ek0'
    + '&client_secret=587euh3uhufodvdl358f2p56mg'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.refresh_token;

  const info = await axios.post(MEETUP_URL);

  //change header on final build
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
}