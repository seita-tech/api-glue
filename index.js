const _ = require('lodash')
const request = require('request')
const deep = require('lodash-deep')
const handlebars = require('handlebars')

const input = require('./input.json')
const mapping = require('./mapping.json')

const interpolateParam = (value, path) => {
  if (!_.isString(value)) return value;

  const template = handlebars.compile(value)

  return template(input)

}

const mapper = (mapping) =>
  deep.deepMapValues(mapping, interpolateParam);

const output = mapper(mapping)
output.json = _.isPlainObject(output.body)
request(output)
