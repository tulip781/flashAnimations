(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABGhwIBNAAIAABMIhNAAgABGAdIBNAAIAABNIhNAAgAgtCyIiHAAIAAljIFpAAIAAFjIiFAAIhdAAIAAipIBdAAIAACpAiRhwIBMAAIAABMIhMAAgAiRAdIBMAAIAABNIhMAAg");
	this.shape.setTransform(0,12.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwCyIAAipIhdAAIAACpIiHAAIAAljIFpAAIAAFjgABGBqIBNAAIAAhNIhNAAIBNAAIAABNIhNAAIAAhNIAABNgAiRBqIBNAAIAAhNIhNAAIBNAAIAABNIhNAAIAAhNIAABNgABGgkIBNAAIAAhMIhNAAIBNAAIAABMIhNAAIAAhMIAABMgAiRgkIBNAAIAAhMIhNAAIBNAAIAABMIhNAAIAAhMIAABMgAAwCyIhdAAIAAipIBdAAIAACpg");
	this.shape_1.setTransform(0,12.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-6,38.2,37.6);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape.setTransform(11.175,11.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,22.4,22.4), null);


(lib.SliderButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.1,2,1).p("AAAiUQAVAAAOAOQAPAPAAAVIAADFQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVIAAjFQAAgVAOgPQAPgOAUAAg");
	this.shape.setTransform(-0.1,-39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgjCGQgOgOAAgVIAAjFQAAgUAOgQQAQgOATAAQAUAAAPAOQAPAQAAAUIAADFQAAAVgPAOQgPAPgUAAQgTAAgQgPg");
	this.shape_1.setTransform(-0.1,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-55.4,12,31.799999999999997);


(lib.SliderBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Regions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Egn3AAuIAAhcMBPvAAAIAABcg");
	this.shape.setTransform(255.225,4.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderBar, new cjs.Rectangle(0,0,510.5,9.3), null);


(lib.slow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(18.1,61.15,1,1,0,0,0,0,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.0685,skewX:20.6281},59).to({scaleY:1,skewX:0},61).to({scaleY:1.0623,skewX:-19.7191},71).to({scaleY:1,skewX:0},78).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,23.9,64.3,38.300000000000004);


(lib.medium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(18.1,61.15,1,1,0,0,0,0,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.0685,skewX:20.6281},29).to({scaleY:1,skewX:0},30).to({scaleY:1.0623,skewX:-19.7191},30).to({scaleY:1,skewX:0},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,23.9,64.3,38.300000000000004);


(lib.fast = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(18.1,61.15,1,1,0,0,0,0,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.0685,skewX:20.6281},14).to({scaleY:1,skewX:0},15).to({scaleY:1.0623,skewX:-19.7191},15).to({scaleY:1,skewX:0},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,23.9,64.3,38.300000000000004);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.instance = new lib.medium();
	this.instance.setTransform(-214.45,149.9,3.9447,3.9447,0,0,0,18.2,43.1);

	this.instance_1 = new lib.fast();
	this.instance_1.setTransform(-214.45,149.9,3.9447,3.9447,0,0,0,18.2,43.1);

	this.instance_2 = new lib.slow();
	this.instance_2.setTransform(-214.45,149.9,3.9447,3.9447,0,0,0,18.2,43.1);

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(-214.85,221.1,3.9447,3.9447,0,0,0,0,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance}]},40).to({state:[{t:this.instance_2}]},60).to({state:[{t:this.instance_3}]},112).wait(37));

	// Layer_2
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(0.25,126.6,1,1,0,0,0,11.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({guide:{path:[0.3,126.6,16.3,113.3,36.5,118.7,57.7,124.4,70,144.1,82.4,164,94.6,179.1,106.8,194.3,123.7,204.1,140.5,214,163.1,221.6,185.7,229.3,205.8,235.1,226,241,241.6,247.4,257.2,253.9,277.3,259.8,283.8,261.7,290.5,262.7,295.5,263.5,300.5,263.8,304.3,264,308.2,264,308.3,264,349.3,264.2]}},267).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AbTUpMg2lAAAMAAAgpR");
	this.shape.setTransform(174.65,132.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(268));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016600").ss(4,1,1).p("A7Vp4QCjiODQA3QDUA5B7DGQB8DHB6CXQB7CXCoBiQCoBiDiBNQDiBNDJA6QDKA7CcBAQCcBBDJA7QBCASBCALQAyAHAyADQAmADAngBQABAAGaAC");
	this.shape_1.setTransform(174.275,190.6573);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(268));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288.2,-1.5,648.7,276.9);


// stage content:
(lib.slide_example_edtech = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.graph1.stop()
		this.button.on("mousedown", function (e)
		
			{
		
				e.target.offsetX = (e.stageX / stage.scaleX) - e.target.x;
		
			}.bind(this));
		
		this.button.on("pressmove", function (e)
		
			{
		
				e.target.x = this.clamp((e.stageX / stage.scaleX) - e.target.offsetX, this.bar.x, this.bar.x + this.bar.nominalBounds.width);
		
				this.setProportion();
		
			}.bind(this));
		
		this.setProportion = function ()
		
		{
		
			var prop = (this.button.x - this.bar.x) / this.bar.nominalBounds.width;
		
			this.txt.x = this.button.x;
		
			this.txt.text = Math.round(prop * 100) + "%";
		
			//this.bar.gotoAndStop(Math.floor(this.bar.timeline.duration * prop));
			this.graph1.gotoAndStop(Math.floor(this.graph1.timeline.duration * prop))
			console.trace(this.graph1.timeline.duration * prop)
		}.bind(this);
		
		this.clamp = function (value, min, max)
		
		{
		
			if (value < min)
		
				return min;
		
			else if (value > max)
		
				return max;
		
			else
		
				return value;
		
		}
		
		setTimeout(this.setProportion, 0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// JS
	this.graph1 = new lib.Symbol22();
	this.graph1.name = "graph1";
	this.graph1.setTransform(408.45,185.6,0.6979,0.6979,0,0,0,174.8,132.2);

	this.timeline.addTween(cjs.Tween.get(this.graph1).wait(1));

	// Bar
	this.txt = new cjs.Text("38%", "8px 'Helvetica'", "#666666");
	this.txt.name = "txt";
	this.txt.lineHeight = 13;
	this.txt.lineWidth = 38;
	this.txt.parent = this;
	this.txt.setTransform(16.8,310.05);

	this.button = new lib.SliderButton();
	this.button.name = "button";
	this.button.setTransform(19.9,376.15);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.SliderButton(), 3);

	this.bar = new lib.SliderBar();
	this.bar.name = "bar";
	this.bar.setTransform(19.8,332.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.button},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,292.3,242.90000000000003,60.30000000000001);
// library properties:
lib.properties = {
	id: '4B93EBDA609CD5499832C33DCA53321E',
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4B93EBDA609CD5499832C33DCA53321E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;