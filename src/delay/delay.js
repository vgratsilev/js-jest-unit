const delay = (callBack, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callBack());
        }, ms);
    });
};

module.exports = delay;
