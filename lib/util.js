function mapWindows(config) {
    let maps = {
        navigationBarBackgroundColor: 'titleBarColor',
        navigationBarTitleText: 'defaultTitle',
        enablePullDownRefresh: 'pullRefresh',
        usingComponents: 'usingComponents',
        component: 'component',
    }

    let result = {}

    for (var key in maps) {
        if (Reflect.has(config, key)) {
            result[maps[key]] = config[key]
        }
    }


    return result
}


exports.mapWindows = mapWindows