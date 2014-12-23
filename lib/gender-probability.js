/*
 * gender-probability
 * https://github.com/dkazemi/gender-probability
 *
 * Copyright (c) 2014 Kazemi, Darius
 * Licensed under the MIT license.
 */

'use strict';

var data = {};

module.exports = {
  load: function(country) {
    country = country || 'us';
    data[country] = require('../lib/' + country + 'processed.json');
  },
  get: function(name, country) {
    country = country || 'us';
    var genderData = data[country].filter(function(el) {
      return el.Name === name;
    })[0];
    if (!genderData) {
      return {
        error: 'no data found',
        data: {
        }
      };
    }
    var ret = {
      error : null,
      data: {
        prob: {
          male: genderData.est.male,
          female: 1-genderData.est.male,
          gender: genderData.prob.gender
        },
        confidence: {
          upper: genderData.upper,
          lower: genderData.lower
        }
      }
    };
    return ret;
  }
};
