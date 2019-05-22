var wantedCommands = {
    enterWanted: function(testData){
        testData.forEach(test => {
            this
            .navigate()
            .click('@burger')
            .waitForElementVisible('@ewpage')
            .click('@ewpage')
            .click('@clbrg')
            .setValue(test.selector, test.input)
            .pause(500)
            .click('#saveBtn')
            .verify.containsText('#errorList', test.error)
        })
        this
            return this

    },
    modifyWanted: function(testData){
        testData.forEach(test => {
            this
            .navigate()
            .click('@burger')
            .waitForElementVisible('@mwpage')
            .click('@mwpage')
            .click('@clbrg')
            .setValue(test.selector, test.input)
            .pause(500)
            .click('#saveBtn')
            .verify.containsText('#errorList', test.error)
        })
        this
            return this

    },
    cancelWanted: function(testData){
        testData.forEach(test => {
            this
            .navigate()
            .click('@burger')
            .waitForElementVisible('@cwpage')
            .click('@cwpage')
            .click('@clbrg')
            .setValue(test.selector, test.input)
            .pause(500)
            .click('#saveBtn')
            .verify.containsText('#errorList', test.error)
        })
        this
            return this

    },
}

module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [wantedCommands],
    elements: {
        burger: '.bm-burger-button',
        clbrg: 'button[tabindex]',
        
        ewpage: '[name="enterOption"]',
        header: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        oai: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'input[name="sexInput"]',
        race: 'input[name="racInput"]',
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        dow: 'input[name="dowInput"]',
        oln: 'input[name="olnInput"]',
        ols: 'input[name="olsInput"]',
        old: 'input[name="oldInput"]',
        lic: 'input[name="licInput"]',
        lis: 'input[name="lisInput"]',
        lid: 'input[name="lidInput"]',

        mwpage: '[name="modifyOption"]',
        warrantID: '[name="widInput"]',

        cwpage: '[name="cancelOption"]',
        roc: '[name=resInput]',
        doc: '[name=datInput]',

    }
}