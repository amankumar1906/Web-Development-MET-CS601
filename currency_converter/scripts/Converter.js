const apiKey = "0wM3JR0KXjxq3W7JEeAemMLFmuchp6u75zrtYEsJ"; // Indicate your own API key (after you sign up)
        
/**
 * Gets an array of currencies
 * @returns An array of available currencies from the free API
 */
const getCurrencyList =  async function() {
    const url = `https://api.freecurrencyapi.com/v1/currencies`;

    let _headers = new Headers({
        'apiKey':  apiKey
    });

    let options = {
        method: 'GET',
        headers: _headers
    }

    const results = await fetch(url, options)
      .then(response => response.json())
      .then(json => {return Object.keys(json.data)} );

      return results;
}

/**
 * Given a valid currency abbreviation, will retrieve today's conversion
 * value (based on USD as the base currency)
 * @param {String} selectedCurrency 
 * @returns JSON
 */
const getExchange = async function(selectedCurrency) {
    const url = `https://api.freecurrencyapi.com/v1/latest?currencies=${selectedCurrency}`;

    let _headers = new Headers({
        'apiKey':  apiKey
    });

    let options = {
        method: 'GET',
        headers: _headers
    }

    const results = await fetch(url, options)
    .then(response => response.json())
    .then(json => { return json.data });

    return results;
}

export { getCurrencyList, getExchange }