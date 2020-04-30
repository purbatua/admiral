import auth from '../../auth/twitter'
import * as security from '../../utils/security'


/**
 * Receives challenge response check (CRC)
 */
export const crc = async (req, res) => {

  const { query, params, body} = req
  console.log({ query, params, body} )

  var crc_token = req.query.crc_token

  if (crc_token) {
    var hash = security.get_challenge_response(crc_token, auth.twitter_oauth.consumer_secret)

    return res.status(200).json({ response_token: 'sha256=' + hash })
    // res.send({
    //   response_token: 'sha256=' + hash
    // })
  } else {
    return res.status(400).send('Error: crc_token missing from request.')
    // res.send('Error: crc_token missing from request.')
  }
}