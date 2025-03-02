import { faker } from '@faker-js/faker'

const PROPERTY_TYPES = ['Apartamento', 'Casa', 'Kitnet'];
const SAVED_STATE = [true, false];
const FAKE_CITY = [
    faker.location.city(), faker.location.city(), faker.location.city(), faker.location.city(),
    faker.location.city(), faker.location.city(), faker.location.city(), faker.location.city(),
    faker.location.city(), faker.location.city(), faker.location.city(), faker.location.city()
];
const FAKE_STATE = [
    faker.location.state(), faker.location.state(), faker.location.state(), faker.location.state(),
    faker.location.state(), faker.location.state(), faker.location.state(), faker.location.state(),
    faker.location.state(), faker.location.state(), faker.location.state(), faker.location.state()
];
const FAKE_IMAGE = [
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600',
]
const MIN_PRICE = 500;
const MAX_PRICE = 2500;
const MIN_VEHICLES = 1;
const MAX_VEHICLES = 2;
const MIN_ROOMS = 1;
const MAX_ROOMS = 4;

function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function createProperty(id) {
    return {
        id: id,
        type: PROPERTY_TYPES[randomIndex(0, PROPERTY_TYPES.length)],
        isSaved: SAVED_STATE[randomIndex(0, SAVED_STATE.length)],
        address: `${FAKE_CITY[randomIndex(0, FAKE_CITY.length)]}, ${FAKE_STATE[randomIndex(0, FAKE_STATE.length)]}`,
        image: `${FAKE_IMAGE[randomIndex(0, FAKE_IMAGE.length)]}`,
        price: `${randomIndex(MIN_PRICE, MAX_PRICE)}`,
        carQuantity: randomIndex(MIN_VEHICLES, MAX_VEHICLES),
        motocycleQuantity: randomIndex(MIN_VEHICLES, MAX_VEHICLES),
        roomQuantity: randomIndex(MIN_ROOMS, MAX_ROOMS),
        bathQuantity: randomIndex(MIN_ROOMS, MAX_ROOMS)
    }
}






