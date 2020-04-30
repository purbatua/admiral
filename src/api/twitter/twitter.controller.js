import axios from 'axios'
import config from '../../config'
import tauth from '../../auth/twitter'

export const index = async (req,res) => {
  // return res.status(200).json({ code: 200, message: 'Accepted'})

  try {

    const token = await tauth.get_twitter_bearer_token()
    console.log('token', token)
    const options = {
      url: `https://api.twitter.com/1.1/account_activity/all/webhooks.json`,
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
tauth
    const { data } = await axios(options)

    return res.send(data)
  } catch(e) {
    return res.send(e)
  }
}

export const create = (req,res) => {
  return res.status(200).json({ code: 200, message: 'Accepted'})
}