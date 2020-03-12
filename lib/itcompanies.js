/**
 *
 * @namespace faker.itcompanies
 */
var Itcompanies = function (faker) {
    var self = this;
  
    /**
     * companies
     *
     * @method faker.itcompanies.companies
     */
    self.companies = function() {
        return faker.random.arrayElement(faker.definitions.itcompanies.companies);
    };
  
    /**
     * jobDescription
     *
     * @method faker.itcompanies.jobDescription
     */
    self.jobDescription = function() {
        return faker.random.arrayElement(faker.definitions.itcompanies.jobDescription);
    };

    /**
     * jobTitle
     *
     * @method faker.itcompanies.jobTitle
     */
    self.jobTitle = function() {
        return faker.random.arrayElement(faker.definitions.itcompanies.jobTitle);
    };
  
    return self;
  };
  module['exports'] = Itcompanies;
  