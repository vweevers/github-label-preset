'use strict'

const labels = require('./labels')
const fs = require('fs')

fs.writeFileSync('labels.json', JSON.stringify(labels, null, 2))
