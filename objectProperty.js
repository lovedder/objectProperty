export function objectProperty(obj, properties, value) {
    if (properties.length === 0) {
        if (value !== undefined) return (obj = value);

        return obj;
    }

    var propertie = properties[0];

    if (properties.length === 1) {
        if (value !== undefined) return (obj[propertie] = value);

        return obj[propertie];
    } else {
        if (obj[propertie] === undefined) obj[propertie] = {};

        if (value === undefined) return objectProperty(obj[propertie], properties.slice(1));

        objectProperty(obj[propertie], properties.slice(1), value);
    }
}
