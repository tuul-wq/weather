export const TempType = {
    Celsius: {
        title: 'Celsius °C',
    },
    Fahrenheit: {
        title: 'Fahrenheit °F',
    }
};

export const weatherData = [
    {
        temperature: {
            tempC: [-11, -10, -7, -2, 1, 0, -1, -1],
            tempF: [13, 14, 19, 29, 34, 32, 31, 30],
        },
        type: {
            link: 'Cloudy',
            code: 'cloudy'
        },
    },
    {
        temperature: {
            tempC: [-2, -2, -1, 1, 2, 1, -1, -2],
            tempF: [29, 29, 30, 34, 36, 34, 30, 29],
        },
        type: {
            link: 'Partly cloudy',
            code: 'partly_cloudy'
        },
    },
    {
        temperature: {
            tempC: [-2, -2, -1, 0, 2, 2, 1, 1],
            tempF: [29, 28, 30, 32, 35, 35, 34, 33],
        },
        type: {
            link: 'Snow',
            code: 'snow'
        },
    },
    {
        temperature: {
            tempC: [1, 1, 1, 2, 4, 3, 2, 2],
            tempF: [33, 33, 34, 36, 39, 38, 36, 35],
        },
        type: {
            link: 'Cloudy',
            code: 'cloudy'
        },
    },
    {
        temperature: {
            tempC: [2, 2, 2, 4, 6, 5, 4, 3],
            tempF: [35, 35, 36, 40, 42, 41, 39, 38],
        },
        type: {
            link: 'Cloudy',
            code: 'cloudy'
        },
    },
    {
        temperature: {
            tempC: [3, 2, 3, 4, 5, 4, 2, 1],
            tempF: [37, 36, 37, 39, 41, 39, 36, 34],
        },
        type: {
            link: 'Rain and snow',
            code: 'snow'
        },
    },
    {
        temperature: {
            tempC: [1, 1, 1, 3, 4, 3, 2, 1],
            tempF: [33, 33, 34, 38, 40, 38, 35, 33],
        },
        type: {
            link: 'Showers',
            code: 'rain_and_cloudy'
        },
    }
]