# Demo

---

## 使用

````html
<div id="box" style="width:500px;height:100px;background-color:#222;"></div>
````

````javascript
seajs.use('index', function(Marker) {
  var marker = new Marker({
  target:'#box'
});
  marker.draw('top');
  marker.draw('left');
  marker.draw('right');
});
````


## 颜色 

````html
<div id="box-1" style="width:500px;height:100px;background-color:#222;"></div>
````

````javascript
seajs.use('index', function(Marker) {
  var marker = new Marker({
  target:'#box-1',
  lineColor:'green',
  textColor:'green'
});
  marker.draw('top');
});
````

