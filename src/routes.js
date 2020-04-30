/**
 * Main application routes
 */

"use strict"

import { handleError } from "./utils"
import path from "path"


module.exports = function(app) {

  //- API Endpoint
  app.use("/api/twitter", require("./api/twitter").default)

  //- Webhook Endpoint
  app.use("/webhook/twitter", require("./webhook/twitter").default)

  //- All undefined asset or api routes should return a 404
  // app
  //   .route("/:url(api|auth|components|app|bower_components|assets)/*")
  //   .get(handleError[404])

  //- All other routes should redirect to the index.html
  app.route("/*").get(function(req, res) {
    res.sendFile(path.resolve(app.get("appPath") + "/index.html"))
  })
}
