const fn = {
    getName: (callback) => {
        const name = "Mike";
        setTimeout(() => {
            callback(name);
            //throw new Error('서버 에러...')
        }, 3000)
    },
    getAge: () => {
        const age = 30;
        return new Promise((res, req) => {
            setTimeout(() => {
                res(age);
            }, 3000)
        })
    }
}

module.exports = fn;