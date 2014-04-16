// 旅行路径对象
var TravelRoute = {};

TravelRoute.Config = {};

// 加载文件资源
TravelRoute.FileLists = {
    resources:[
        /*==============加载js=============*/

        //'master/css/base.css',           // 加载全局css
        //'master/css/map.css',            // 加载地图css

        /*==============================*/

        /*==============加载js=============*/

        // javascript库
        'lib/jquery-2.1.0.js',
        'lib/underscore.js',

        //自定义js
        'master/js/util.js',            //工具包
        'master/js/map.js',             //地图控制
        'master/js/renderControl.js',   //视图呈现控制
        'master/js/calc.js'             //算法计算
        /*==============================*/
    ]
};

// resources loader
head.load(TravelRoute.FileLists.resources, function(){
    console.log("加载。。。");
});