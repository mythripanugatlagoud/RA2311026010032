function Log(stack, level, packageName, message) {
    const logMessage = `[${stack}] [${level}] [${packageName}] ${message}`;
    console.log(logMessage);
}

module.exports = Log;