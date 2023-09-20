/* game-ops.js
   Steven Reed
   09/19/2023

   this file contains fetch functions which call on the RAWG API

   [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
   link to the api:
   https://rawg.io/apidocs
   [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
   

*/

const RAWG_KEY = `aaadbe900b0f429ea88c22d1c7f9badf`;    // key for SDR

const RAWG_URL = `https://api.rawg.io/key=${RAWG_KEY}`; // generic key-authed URL