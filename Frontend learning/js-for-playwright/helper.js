function makesearchurl(site , keyword){
    return `https://${site}/search?q=${keyword}`;
}

module.exports = { makesearchurl};
