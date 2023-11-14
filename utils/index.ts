
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '2b1271c46amsh18ebd2e9abfa62ap145adcjsn6ececefbfff0',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}