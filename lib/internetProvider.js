/**
 *
 * @namespace faker.internetProvider
 */
var Internet_provider = function (faker) {
    var self = this;
  
    /**
     * companies
     *
     * @method faker.internetProvider.providers
     */
    self.providers = function() {
        return faker.random.arrayElement(faker.definitions.internetProvider.providers);
    };
  
    /**
     * jobDescription
     *
     * @method faker.internetProvider.providerDescription
     */
    self.providerDescription = function() {
        return faker.random.arrayElement(faker.definitions.internetProvider.providerDescription);
    };

    /**
     * jobTitle
     *
     * 
    
    self.jobTitle = function() {
        return faker.random.arrayElement(faker.definitions.itcompanies.jobTitle);
    };
   */
    return self;
  };
  module['exports'] = Internet_provider;
  