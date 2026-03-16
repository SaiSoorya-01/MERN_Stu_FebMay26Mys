function mergeSettings(savedSettingsJSON, defaultSettings) {

    let savedSettings = JSON.parse(savedSettingsJSON);

    let merged = {};

    for (let key in defaultSettings) {
        merged[key] = defaultSettings[key];
    }

    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }

    let mergedJSON = JSON.stringify(merged);

    return {
        mergedObject: merged,
        mergedJSON: mergedJSON
    };
}
// result
let defaultSettings = {
    theme: "light",
    notifications: true,
    volume: 50
};
let savedSettingsJSON = '{"theme":"dark","volume":80}';
let result = mergeSettings(savedSettingsJSON, defaultSettings);
console.log(result);