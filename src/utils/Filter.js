import { createProperty } from './FakeProperties';

function generateProperties(quantity = 16) {
    let properties = [];
    for (let i = 0; i < quantity; i++) {
        properties.push(createProperty(i));
    }
    return properties;
}

export function filterByAll(number = 16) {
    return generateProperties(number);
}