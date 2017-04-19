$(document).ready(function(){

  var waves = new SineWaves({
    el: document.getElementById('waves'),

    speed: 4,

    width: function() {
      return $(window).width();
    },

    height: function() {
      return $(window).height();
    },

    ease: 'SineInOut',

    wavesWidth: '60%',

    waves: [{
      timeModifier: 4,
      lineWidth: 1,
      amplitude: 100,
      wavelength: 50
    }, {
      timeModifier: 2,
      lineWidth: 2,
      amplitude: -160,
      wavelength: 50
    }, {
      timeModifier: 1,
      lineWidth: 1,
      amplitude: -160,
      wavelength: 100
    }, {
      timeModifier: 0.5,
      lineWidth: 1,
      amplitude: -165,
      wavelength: 200
    }, {
      timeModifier: 0.25,
      lineWidth: 2,
      amplitude: -140,
      wavelength: 250
    }],

    // Called on window resize
    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0, "#0099ff");
      gradient.addColorStop(0.5, "#33cc66");
      gradient.addColorStop(1, "#33cc66");

      var index = -1;
      var length = this.waves.length;
      while (++index < length) {
        this.waves[index].strokeStyle = gradient;
      }

      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;
    }
  });


});
