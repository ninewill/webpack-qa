import "reset.scss";
import "index.scss";
let img = 'annualreport.png';
require('images/' + img);

// import Item from "Item.js"
// console.log(Item);

// console.log($(".header-bg"))



// var tmax_optionsGlobal = {
//     repeat: 0,
//     repeatDelay: 2,
//     yoyo: false
// };

// CSSPlugin.useSVGTransformAttr = true;

// var tl = new TimelineMax(tmax_optionsGlobal),
//     path = 'svg *',
//     stagger_val = .1,
//     duration = .5;

// $.each($(path), function (i, el) {
//     tl.set($(this), {
//         x: '+=' + getRandom(0, 0),
//         y: '+=' + getRandom(0, 0),
//         rotation: '+=' + getRandom(0, 0),
//         scale: 0,
//         opacity: 0
//     });
// });

// var stagger_opts_to = {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     rotation: 0,
//     ease: SlowMo.ease.config(.2, .2, false),



// };

// tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

// var $svg = $('svg');
// $svg.hover(
//     function () {
//         tl.timeScale(0.15);
//     },
//     function () {
//         tl.timeScale(1);
//     });

// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }



// var roundLogEl = document.querySelector('.round-log');

// anime({
//     targets: roundLogEl,
//     innerHTML: [0, 100],
//     easing: 'linear',
//     round: 10
// });


// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


var roundLogEl = document.querySelector('.year-number');
var roundLogEl2 = document.querySelector('.average-number');

anime({
    targets: roundLogEl,
    innerHTML: [0, 7.5],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl2,
    innerHTML: [0, 204.4],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});

//年度總量
var bar = new ProgressBar.Line(container2016, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a6c3dd',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 7.2));
    }
});
var bar2 = new ProgressBar.Line(container2017, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a6c3dd',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 7.2));
    }
});
var bar3 = new ProgressBar.Line(container2018, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 7.2));
    }
});

//平均日運量
var bar4 = new ProgressBar.Line(secContainer2016, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 196));
    }
});
var bar5 = new ProgressBar.Line(secContainer2017, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 202));
    }
});
var bar6 = new ProgressBar.Line(secContainer2018, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 204));
    }
});

bar.animate(1.0);  // Number from 0.0 to 1.0
bar2.animate(1.0);  // Number from 0.0 to 1.0
bar3.animate(1.0);  // Number from 0.0 to 1.0
bar4.animate(1.0);  // Number from 0.0 to 1.0
bar5.animate(1.0);  // Number from 0.0 to 1.0
bar6.animate(1.0);  // Number from 0.0 to 1.0


















