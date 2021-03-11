const getTheTitles = function(bookInfo) {
    titlearray=[]
    bookInfo.forEach(el=>{
        titlearray.push(el.title)
    })
    return titlearray;
}

module.exports = getTheTitles;
