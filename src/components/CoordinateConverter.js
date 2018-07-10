export function convertLng(lng, width) {
    return (lng + 180) / (360 / width);
}

export function convertLat(lat, height) {
    return (90 - lat) / (180 / height);
}

export function reverseLng(x, width) {
    return ((360 * x) / width) - 180;
}

export function reverseLat(y, height) {
    return 90 - ((y * (180 / height)));
}