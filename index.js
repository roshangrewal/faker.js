// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;
console.log('------------------------------ IT Companies Section ---------------------------------');
console.log('Company Name: ' + faker.itcompanies.companies());
console.log('Job Title: ' + faker.itcompanies.jobTitle());
console.log('Job Description: ' + faker.itcompanies.jobDescription());
console.log(' ');

console.log('--------------------------- Internet Provider Section -------------------------------');
console.log('Internet Provider Name: ' + faker.internetProvider.providers());
console.log('Internet Provider Description: ' + faker.internetProvider.providerDescription());
