let fs = require('fs');


class FSSystem {
    read() {
        return new Promise((success, failure) => {
            fs.readFile('file', function (err, data) {
                if (err) return failure(err);
                return success(JSON.parse(data));
            });
        });
    }

    write() {
        return new Promise((success, failure) => {
            fs.writeFile('file', function (err, data) {
                if (err) return failure(data);
                return success(JSON.parse(data));
            });
        });
    }
}


module.exports = {
    FSsytem: FSSystem
};