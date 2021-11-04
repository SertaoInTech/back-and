async function sizeSum(size) {
    let total = 0
    for (const a of size) {
        total += a;

    }
    if (total >= 1000000) {
        return `${String(total / 1000000).substr(0, 4)} Mb`;
    } else if (total > 10000 && total < 100000) {
        return `${String(total).substr(0, 2)} Kb`;
    } else if (total > 100000 && total < 1000000) {
        return `${String(total).substr(0, 3)}.0 Kb`;
    } else {
        return `${String(total).substr(0, 1)} Kb`;
    }

}

module.exports = {
    async info(files) {
        let sizeFile = [];
        let localFiles = [];
        let nameOrig = [];
        let value = 0;

        for (const excelData of files) {
            sizeFile.push(excelData.size);
            localFiles.push(excelData.path);
            nameOrig.push(excelData.originalname);
            value += 1;

        }

        return {
            amountFiles: value,
            sizeFiles: await sizeSum(sizeFile),
            nameOrigs: nameOrig,
            localFile: localFiles,
        }

    },

};
