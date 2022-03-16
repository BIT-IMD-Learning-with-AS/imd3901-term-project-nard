AFRAME.registerComponent('blessing', {
    init: function () {
        let el = this.el;
        let glow = document.createElement('a-sphere');
        let scene = document.querySelector('a-scene');

        currentPosition = el.getAttribute('position');
        
        glow.setAttribute('material','color: #F5F4BC');
        glow.setAttribute('material','opacity: 0.4');
        glow.setAttribute('material','dithering: false');
        glow.setAttribute('material','blending: additive');
        glow.setAttribute('material','shader: flat');
        glow.setAttribute('material','src: /assets/glow.png');            
        glow.setAttribute('scale', '2 2 2');
        glow.setAttribute('sound', 'src: /assets/sound/bell.wav; volume: ')
        
        
        //glow.setAttribute('animation', {property: 'scale', to: {x: 500, y: 500, z: 500}});
        

        glow.setAttribute('position', currentPosition)
        scene.appendChild(glow);

        this.bless = function(e){
            glow.setAttribute('animation', 'property: scale; to: 10 10 10; dur: 4000');
            glow.components.sound.playSound();
        }

        this.el.addEventListener('click', this.bless);
    },
    remove: function () {
        this.el.removeEventListener('click', this.bless)

    }
            
    
});