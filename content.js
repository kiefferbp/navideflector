chrome.storage.sync.get(null, function (storageContents) {
    var script = document.createElement("script");
    script.text = "";

    Object.keys(storageContents).forEach(function (key) {
        var fakedValue = storageContents[key];

        if (!fakedValue) {
            fakedValue = navigator[key];
        }

        script.text += "navigator.__defineGetter__('" + key + "', () => '" + fakedValue + "');";
        script.text += "console.log('Faked the value of navigator." + key + " to " + fakedValue + "');";
    });

    (document.head || document.documentElement).appendChild(script);
});
