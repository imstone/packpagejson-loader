module.exports = function(source) {
    this.cacheable && this.cacheable();
    var path = this.query.split('=')[1];
    var value = typeof source === "string" ? JSON.parse(source) : source;
    var isArray = value instanceof Array;
    this.value = [value];
    var mainpath = path.split('/');
    mainpath.pop();
    var packjsonlist = [];
    var list = value;
    for (var i = 0; list.length > i ; i++ ) {      
        var namelist = list[i].split('-');
        namelist.shift();
        var joinType = namelist.length > 1 ? '-' : ''
        var compotent = namelist.join(joinType);
        console.log(compotent)
        try {
            var json = require(path + '/' + compotent + '/' + 'package.json');
        }catch(e){
            console.error('Package-json-loader cannot find ' + list[i]);
            break;
        }
        
        json.readme = path + '/' + compotent + '/'  + 'README.md'
        packjsonlist.push(json);
    }
    value.readme = mainpath.join('/')  + '/'  + 'README.md'
    return "module.exports = " + JSON.stringify(packjsonlist, undefined, "\t") + ";";
}
