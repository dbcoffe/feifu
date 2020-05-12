// ===========================地图部分==========
//===============================创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
}
function createMap(){
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(102.098826,37.610502),4);
}
function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
        target.openInfoWindow(window);
    });
}
function addMapOverlay(){
}
//向地图添加控件
function addMapControl(){
    let scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    let navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(navControl);
    let overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
    map.addControl(overviewControl);
}
let map;
initMap();
//==================================定位
function setPlace(value) {
    let local, point, marker = null;
    local = new BMap.LocalSearch(map, { //智能搜索
        onSearchComplete: fn
    });

    local.search(value);

    function fn() {
        //如果搜索的有结果
        console.log(local.getResults());
        // console.log(local.getResults().getPoi(9).point);
        if(local.getResults() !== undefined) {
            map.clearOverlays(); //清除地图上所有覆盖物
            if(local.getResults().getPoi(0)) {
                point = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
                map.centerAndZoom(point, 9);
                marker = new BMap.Marker(point); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                marker.enableDragging(); // 可拖拽
                alert("当前定位经度:"+point.lng+"纬度:"+point.lat);
            } else {
                alert("未匹配到地点!可拖动地图上的红色图标到精确位置");
            }
        } else {
            alert("未找到搜索结果")
        }
    }
}
// 按钮事件
$("#btn").click(function(){
    setPlace($("#address").val());
});
// // ============================编写自定义函数,创建标注
// function addMarker(point){
//     let marker = new BMap.Marker(point);
//     map.addOverlay(marker);
// }
// // 随机向地图添加25个标注
// let bounds = map.getBounds();
// // console.log(bounds);
// let sw = bounds.getSouthWest();
// let ne = bounds.getNorthEast();
// let lngSpan = Math.abs(sw.lng - ne.lng);
// let latSpan = Math.abs(ne.lat - sw.lat);
// console.log(sw.lng + lngSpan * (Math.random() * 0.7));
// for (let i = 0; i < 50; i ++) {
//     let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
//     addMarker(point);
// }

//================兼容性检测
// if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
//     let points = [];  // 添加海量点数据
//     for (let i = 0; i < data.data.length; i++) {
//         points.push(new BMap.Point(data.data[i][0], data.data[i][1]));
//     }
//     let options = {
//         shape: BMAP_POINT_SHAPE_WATERDROP
//     }
//     let pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
//     map.addOverlay(pointCollection);  // 添加Overlay
// } else {
//     alert('请用chrome、safari、IE8+以上浏览器查看');
// }