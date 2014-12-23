# gender-probability

Providing gender probabilities for US/UK names using Open Gender Tracker's [Global Name Data](https://github.com/OpenGenderTracking/globalnamedata) resource.

## Introduction
There are not a lot of tools out there that provide nuanced gender guesses for names. [Global Name Data](https://github.com/OpenGenderTracking/globalnamedata), created by Irene Ros and Adam Hyland while working at Bocoup, is an excellent resource that provides gender probabilities and confidence intervals for first names found in the US and the UK. You can [read more about the project here](http://bocoup.com/weblog/global-name-data/), including details on how gender data is aggregated. Their project even provides the code they used to define and scrape gender information, so if you'd like to tweak it and make your own data set, you're welcome to do so.

I made this Node module as a way to quickly access their data in a convenient way.

## Documentation
Install the module with: `npm install gender-probability`

Load the library with `.load()` and then individually load any of the data files (`"us"` or `"uk"` or both).

```javascript
var genderProb = require('gender-probability');

// load the data files for either 'us' (default) or 'uk'
// these are ~5MB each and are loaded into memory
genderProb.load(); // 'us' by default
genderProb.load('uk');
```

Use `.get(name, country)` to get gender probability for a name. The country in question must be loaded.

```javascript
// get gender info for a name
var caseyInfo = genderProb.get('Casey'); // country is 'us' by default
```

The data returned will look like this:

```javascript
{
  "error": null,
  "data: {
    "prob": {
      "male": 0.591264319772974,
      "female": 0.408735680227026,
      "gender": "Unknown"
    },
    "confidence": {
      "upper": 0.593521954180142,
      "lower": 0.589002829207331
    }
  }
}
```

## Example Usage

```javascript
var genderProb = require('gender-probability');
genderProb.load(); // 'us' by default

var data = genderProb.get('Cameron');
if (!data.error) {
  console.log(data.data.prob.gender) // "Male"
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License (Data)

The following license information is copied directly from the Open Gender Tracker projects [Global Name Data license](https://github.com/OpenGenderTracking/globalnamedata/blob/master/LICENSE.md).

For the sake of convenience all data for this project are licensed under [CC-BY 3.0](http://creativecommons.org/licenses/by/3.0/).

Data gathered from government sources on baby names are individually licensed as follows:

* Data from the Social Security Administration is released under the [public domain](http://www.ssa.gov/policy/accessibility.html)
* Data from the UK Office of National Statistics is released under the [Open Government License](http://www.ons.gov.uk/ons/site-information/information/creative-commons-license/index.html)
* Data from the Northern Ireland Statistics and Research Agency is licensed under the [Open Government License](http://www.nisra.gov.uk/home/crowncopyright.asp.htm)
* Data from the Scotland General Register Office is licensed under the [Open Government License](http://www.gro-scotland.gov.uk/census/censushm/scotcen2/scotcen21/scotcen26.html)

The [terms](http://www.nationalarchives.gov.uk/doc/open-government-licence/) of the Open Government License are "[intended to be interoperable](http://wiki.creativecommons.org/Government_use_of_Creative_Commons#United_Kingdom)" with the Creative Commons CC-BY license.

Additionally, [database rights](http://en.wikipedia.org/wiki/Database_right) are not recognized in the United States although they are recognized in the UK, EU and additional jurisdictions. As such, data from databases such as these may not be copyrightable in the United States.

## License
Copyright (c) 2014 Kazemi, Darius
Licensed under the MIT license.
