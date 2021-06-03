/**
 * Calculates Summary Group Average
 * 
 * @api {get} /api/calculateSGA Calculate SGA value
 * @param {ita} Number Summed Individual Trait Average 
 * @param {sailorCount} Number Count of Sailors in given group 
 * @apiSuccess (200) {Object} raw `sga` and `roundedSGA` object
 */ 
exports.handler = async event => {
    const givenITA = event.queryStringParameters.ita;
    const givenSailorCount = event.queryStringParameters.sailorCount;
    const calculatedSGA = givenITA / givenSailorCount;

    return {
        statusCode: 200,
        body: JSON.stringify({ 
            sga: calculatedSGA, 
            sgaRounded: Number(Math.round(parseFloat(calculatedSGA + 'e2')) + 'e-2').toFixed(2)
        }),
    }
}


