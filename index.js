module.exports = Marker;

var $ = require('jquery');
var Position = require('position');
require('./src/marker.css');


var vTpl = require('./src/v-line.tpl'),
    hTpl = require('./src/h-line.tpl');



var targetXY = [{
        x: 0,
        y: '100%+5px'
    }, {
        x: '-5px',
        y: 0
    }, {
        x: 0,
        y: '-5px'
    }, {
        x: '100%+5px',
        y: 0
    }],
    baseXY = [{
        x: 0,
        y: 0
    }, {
        x: '100%',
        y: 0
    }, {
        x: 0,
        y: '100%'
    }, {
        x: 0,
        y: 0
    }];


function Marker(option) {
    var defaults = {
        lineColor:'red',
        textColor:'#222'
    };
    this.o = $.extend({},defaults,option);

    var $target = this.$target = $(option.target);
    this.width = $target.width();
    this.height = $target.height();
};


Marker.prototype.draw = function(dir) {
    if (dir === 'left' || dir === 'right') {
        var $r = $(vTpl);
        $r.height(this.height);
        $r.find('.marker-text').text(this.height + 'px');
    } else {
        var $r = $(hTpl);
        $r.width(this.width);
        $r.find('.marker-text').text(this.width + 'px');
    }

    // set line color style
    if(this.o.lineColor!=='red'){
        $r.css({
            borderColor:this.o.lineColor
        });
        $r.find('.marker-line').css({
            borderColor:this.o.lineColor
        });
    }

    // set text
    if(this.o.textColor!=='#222'){
        $r.find('.marker-text').css({
            color:this.o.textColor
        });
    }

    var index = (function() {
        if (dir === 'top') return 0;
        if (dir === 'right') return 1;
        if (dir === 'bottom') return 2;
        if (dir === 'left') return 3;
    })();

    $r.appendTo('body');


    Position.pin({
        element: $r,
        x: targetXY[index].x,
        y: targetXY[index].y
    }, {
        element: this.$target,
        x: baseXY[index].x,
        y: baseXY[index].y
    });

};