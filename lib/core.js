module.exports = function(source) {
    this.cacheable && this.cacheable();
    var path = this.query.split('=')[1];
    var value = typeof source === "string" ? JSON.parse(source) : source;
    this.value = [value];
    var mainpath = path.split('/');
    mainpath.pop();
    value.readme = mainpath.join('/')  + '/'  + 'README.md'
    var packjsonlist = [value];
    var list = value.dependencies;
    for (var item in list ) {
        var compotent = item.split('-')[1];
        try {
            var json = require(path + '/' + compotent + '/' + 'package.json');
        }catch(e){
            console.error('Package-json-loader cannot find ' + item);
            break;
        }
        json.readme = path + '/' + compotent + '/'  + 'README.md'
        packjsonlist.push(json);
    }
    return "module.exports = " + JSON.stringify(packjsonlist, undefined, "\t") + ";";
}