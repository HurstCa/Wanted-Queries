module.exports = [
    // {selector:'', input: '', error: ''},
    {selector:'@warrantID', input: '123456789', error: `The "Warrant ID" field should be 10 characters long.`},
    {selector:'@warrantID', input: '12345678912', error: `The "Warrant ID" field should be 10 characters long.`},
    {selector:'@warrantID', input: 'asdfghjklp', error: 'The "Warrant ID" field can only include numeric characters.'},
    {selector:'@roc', input: 'abcd12345', error: 'The "Reason for Cancellation" field should be between 10 and 150 characters long.'},
    {selector:'@roc', input: 'AaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddsagadgdaewvwererwervSDwvWCFDSADFADFSFBGBSERTHDNNHtfhndthdnghbsrgpkjhafpiuhekjvnpuhdfvklajd12345678901', error: 'The "Reason for Cancellation" field should be between 10 and 150 characters long.'},
    {selector:'@doc', input: '12311899', error: `The "Date of Cancellation" field can only include characters from the English Alphabet or numeric characters.`},
    {selector:'@doc', input: '05152019', error: ``},
]