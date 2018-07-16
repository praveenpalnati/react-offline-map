export function convertLng(lng, width, bounds) {
    return (lng - bounds.topLng) * width / (bounds.bottomLng - bounds.topLng);
}

export function convertLat(lat, height, bounds) {
    return (bounds.topLat - lat) * height / (bounds.topLat - bounds.bottomLat);
}

export function reverseLng(x, width, bounds) {
    return (((bounds.bottomLng - bounds.topLng) * x) / width) + bounds.topLng;
}

export function reverseLat(y, height, bounds) {
    return 90 - ((y * (180 / height)));
}