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
        glow.setAttribute('scale', '0.1 0.1 0.1');
        glow.setAttribute('sound', 'src: /assets/sound/bell.wav; volume: 0.8')
        
        
        //glow.setAttribute('animation', {property: 'scale', to: {x: 500, y: 500, z: 500}});
        

        glow.setAttribute('position', currentPosition)
        scene.appendChild(glow);

        this.bless = function(e){
            glow.setAttribute('animation', 'property: scale; to: 200 200 200; dur: 10000');
            glow.components.sound.playSound();
            
        }

        
        this.el.addEventListener('click', this.bless);
        
    },
    remove: function () {
        this.el.removeEventListener('click', this.bless)
        sceme.removeChild(glow);
    }
            
    
});

AFRAME.registerComponent('object-info', {
    init: function () {
        let el = this.el;
        let caption = document.createElement('a-text');
        let scene = document.querySelector('a-scene');

        let text = el.getAttribute('value');

        let currentPositionX = el.object3D.position.x - 0.4;
        let currentPositionY = el.object3D.position.y + 1.5;
        let currentPositionZ = el.object3D.position.z + 0.3;
        console.log(currentPositionZ)

        this.description = function(e){
            caption.setAttribute('position', {x: currentPositionX, y: currentPositionY, z: currentPositionZ});
            caption.setAttribute('rotation', '-30 0 0');
            caption.setAttribute('material','color: #FFF');
            caption.setAttribute('sound', 'src: /assets/sound/bell.wav')
            //caption.setAttribute('animation', 'property: opacity, to: 0; dur: 6000');
            caption.setAttribute('value', text);
            
            scene.appendChild(caption);    
            
        }
        this.el.addEventListener('click', this.description);
    },
    remove: function () {
        this.el.removeEventListener('click', this.description)

    }
            
    
});