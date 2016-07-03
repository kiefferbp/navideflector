// get settings
chrome.storage.sync.get(null, function (storageContents) {
    Object.keys(storageContents).forEach(function (key) {
        var option = document.getElementById(key);

        if (storageContents[key]) {
            option.value = storageContents[key];
        } else {
            option.value = navigator[key]; // use default value
        }
    });
});

// save settings
Array.prototype.forEach.call(document.getElementsByName("options"), function (optionNode) {
    optionNode.addEventListener("keyup", function () {
        var json = {};
        json[optionNode.id] = optionNode.value;
        chrome.storage.sync.set(json);
    });
});
