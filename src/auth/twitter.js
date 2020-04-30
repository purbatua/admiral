import axios from 'axios'
import csrf from 'csurf'
import config from '../config'

const { twitter: twitter_config } = config

let auth = {}

const requiredConfig = [
  'consumer_key',
  'consumer_secret',
  'access_token',
  'access_token_secret',
  'webhook_env',
]


if (!requiredConfig.every(key => typeof twitter_config[key] !== 'undefined')) {
  console.error(`One of more of the required environment variables (${requiredConfig.join(', ')}) are not defined. Please check your environment and try again.`)
  process.exit(-1)
}

auth.twitter_oauth = {
  consumer_key: twitter_config.consumer_key,
  consumer_secret: twitter_config.consumer_secret,
  token: twitter_config.token,
  token_secret: twitter_config.token_secret,
}

auth.twitter_webhook_environment = twitter_config.webhook_env

auth.csrf = csrf()

auth.get_twitter_bearer_token = async () => {
  if (auth.twitter_bearer_token) {
    return auth.twitter_bearer_token
  }

  const options = {
    url: 'https://api.twitter.com/oauth2/token',
    method: 'POST',
    auth: {
      user: auth.twitter_oauth.consumer_key,
      pass: auth.twitter_oauth.consumer_secret
    },
    form: {
      'grant_type': 'client_credentials'
    }
  }

  try {
    const { data } = await axios(options)
    console.log('get_twitter_bearer_token data', data)
    auth.twitter_bearer_token = data.access_token
    return auth.twitter_bearer_token
  } catch(e) {
    throw e
  }
}

export default auth