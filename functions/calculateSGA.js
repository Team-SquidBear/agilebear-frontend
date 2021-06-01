/**
 * Calculates Summary Group Average
 * 
 * @param {ita} Number Summed Individual Trait Average 
 * @param {sailorCount} Number Count of Sailors in given group 
 * @returns An object containing the raw SGA and rounded SGA values 
 */ 
exports.handler = async(event) => {
    const givenITA = event.queryStringParameters.ita;
    const givenSailorCount = event.queryStringParameters.sailorCount;

    const calculatedSGA = givenITA / givenSailorCount;
    
    return {
        statusCode: 200,
        body: JSON.stringify({ 
            sga: calculatedSGA, 
            sgaRounded: Number(calculatedSGA.toPrecision(3))
        }),
    }
}