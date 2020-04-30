const crypto = require('crypto')


/**
 * Creates a HMAC SHA-256 hash created from the app TOKEN and
 * your app Consumer Secret.
 * @param  token  the token provided by the incoming GET request
 * @return string
 */
export const get_challenge_response = (crc_token, consumer_secret) => {
  return crypto.createHmac('sha256', consumer_secret)
    .update(crc_token)
    .digest('base64')
}