chrome.storage.sync.get(null, function (storageContents) {
    var script = document.createElement("script");
    script.text = "";

    Object.keys(storageContents).forEach(function (key) {
        script.text += "navigator.__defineGetter__('" + key + "', () => '" + storageContents[key] + "');";
        script.text += "console.log('Faked the value of navigator." + key + " to " + storageContents[key] + "');";
    });

    (document.head || document.documentElement).appendChild(script);
});
