// Produkte config
const produkte = [
    { name: 'Hochzeitspakete ab', preis: '150' , infos: ''},
    { name: 'Damendienstleistung ab', preis: '17', infos: '' },
    { name: 'Make-up ab', preis: '22', infos: '' },
    { name: 'Herrenservice', preis: '29', infos: 'Inklusive Schnitt, trocknen und Produkte' },
]

// Carrer start config
const start_year = 2000
const start_mon = 1
const start_day = 1

// Counters config
const counters = {
    start_year: start_year,
    frisuren_per_day: 2.8,
    h_frisuren_per_day: 0.053,
    clients_per_day: 0.025,
    days_since_start: days_passed(new Date(start_year, start_mon, start_day))
}

// Days counter function
function days_passed(dt) {
    var oneDay = 24*60*60*1000;
    var today = new Date();
    var secondDate = new Date(dt.getTime());
    return Math.round(Math.abs((today.getTime() - secondDate.getTime())/(oneDay)));  
}

