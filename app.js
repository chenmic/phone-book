
const express = require('express')

const router = require('./routes')

const app = express()
const port = 8000

// Body-parsing middleware
app.use(express.json())

app.use(router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// Export for testing
module.exports = app
