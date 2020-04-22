class CountryApi {

    constructor() {
        const protocol = 'https://',
              host = 'date.nager.at',
              path = '/Api/v2/';

        this.availableCountriesUri = `${protocol}${host}${path}AvailableCountries`;
        this.countryInfoUri = `${protocol}${host}${path}CountryInfo`;
    }  
    
    get availableCountries() { return this.availableCountriesUri; }
    get countryInfo() { return this.countryInfoUri; }
    set countryInfo(code) { this.countryInfoUri = `${this.countryInfoUri}?countryCode=${code}` }
}

 module.exports = { CountryApi };