let enterData = require('../assests/enterData')
let modifyData = require('../assests/wantedData')
let cancelData = require('../assests/cancelData')
var wantedpg
module.exports = {
    beforeEach: browser => {
        wantedpg = browser.page.wantedQueries()
        wantedpg.navigate()
    },
    'enter wanted': browser => {
        wantedpg
        .enterWanted(enterData)
    },

    'modify wanted': browser => {
        wantedpg
        .modifyWanted(modifyData)
    },
    
    'cancel wanted': browser => {
        wantedpg
        .cancelWanted(cancelData)
    },
}