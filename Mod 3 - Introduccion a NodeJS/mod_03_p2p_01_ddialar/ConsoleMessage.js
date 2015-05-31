function showMessage (message) {
    console.log(message);
}

function info (userMessage) {
    showMessage('[INFO] - ' + userMessage);
}

function error (userMessage) {
    showMessage('[ERRO] - ' + userMessage);
}

function warning (userMessage) {
    showMessage('[WARN] - ' + userMessage);
}

function ok (userMessage) {
    showMessage('[OK  ] - ' + userMessage);
}

exports.info = info;
exports.error = error;
exports.warning = warning;
exports.ok = ok;
