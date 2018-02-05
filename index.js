const _ = require('lodash')
const request = require('request')
const expandJson = require('expand-json').expandJson

const input = require('./input.json')
const mapping = require('./mapping.json')


const output = expandJson(mapping, input)

output.json = _.isPlainObject(output.body)

request(output)
