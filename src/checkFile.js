function checkFormatInput(item) {
    // AAA;000.0;AAA
    if (!/^[A-Z]{3};\d+(\.\d{1,4})?;[A-Z]{3}$/.test(item)) {
        var message = 'Input Format incorrect ' + JSON.stringify(item);
        throw new Error(message);
    }
}

function checkFormatSize(item) {
    // 00000
    if (!/^\d$/.test(item)) {
        var message = 'size Format incorrect ' + JSON.stringify(item);
        throw new Error(message);
    }
}

function checkFormatList(item) {
    // AAA;AAA;000.0
    if (!/^[A-Z]{3};[A-Z]{3};\d+(\.\d{1,4})?$/.test(item)) {
        var message = 'Liste Format incorrect ' + JSON.stringify(item);
        throw new Error(message);
    }
}


module.exports = {
    checkFormatInput: checkFormatInput,
    checkFormatSize: checkFormatSize,
    checkFormatList: checkFormatList
}