import React, { useEffect, useRef } from 'react'


const memoryCache = {};


const chars = " .:-=+*#%@".split("");

const calculateSize = (width) => {
  if (width <= 480) {
    return Math.min(220, width - 40);
  } else if (width <= 768) {
    return Math.min(280, width - 60);
  } else {
    return 500;
  }
};



const createParticlesfromRaw= (raw, isMobile)=>{
    const fontSize= isMobile? 5:7;
    return raw.map((p)=>({
        x: p.x + (Math.random()-0.5)*400,
        y:p.y+400* (Math.random()-0.5),
        targetX:p.x,
        targetY:p.y,
        vx:0,
        vy:0,
        char : p.char,
        fontSize:fontSize,
        baseAlpha:p.alpha,
        currAlpha:0,
        delay: Math.random() * 0.4,
        shimmer: Math.random() * Math.PI * 2,
    }
))

}

const processImage= (img, tgtSize)=>{

    const canvasWidth=tgtSize;
    const canvasHeight=tgtSize;
    const off=document.createElement("canvas") ;//create a canvas offscreen
    const ctx=off.getContext("2d"); //returns a drawing context on the canvas element 
    off.width=canvasWidth;
    off.height=canvasHeight;

    const aspect=img.width/img.height;
    let drawHeight=canvasHeight*(0.8);
    let drawWidth=drawHeight*aspect //must maintain same aspect ratio


    if(aspect<1){
        drawWidth=canvasWidth*(0.8);
        drawHeight=drawWidth/aspect;
    }

    const offsetX=(img.width-drawWidth)/2;
    const offsetY=(img.height-drawHeight)/2;

    ctx.drawImage(img,offsetX,offsetY,drawWidth,drawHeight);
    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const pixels = imageData.data;

    const rawParticles = [];
    const isMobileSize = tgtSize <= 280;
    const fontSize = isMobileSize ? 5 : 7;
    const colGap = fontSize * 0.7;
    const rowGap = fontSize * 1.1;

    for(let y=0;y<canvasHeight;y+=rowGap){
        for(let x=0;x<canvasWidth;x+=colGap){
            const i = (Math.floor(y) * canvasWidth + Math.floor(x)) * 4; //4 cause RGBA
            const a = pixels[i + 3];

            if(a>128){
                const r=pixels[i];
                const g=pixels[i+1];
                const b=pixels[i+2];
                const bright=(r+g+b)/(255*3);
                const idx=Math.floor(bright*(chars.length-1));

                rawParticles.push({
                    x:Number(x.toFixed(1)),
                    y:Number(y.toFixed(1)),
                    char: chars[idx],
                    alpha: Number((0.4 + bright * 0.6).toFixed(2)),
                })
            }
        }
    }
    return rawParticles;
}



const alignPixels = (ctx,canvasWidth,canvasHeight, particles, animationRef, mouse)=>{

    const animate=()=>{
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        let still_moving=false;

        particles.forEach((p)=>{
            const dx=p.targetX-p.x;
            const dy=p.targetY-p.y;
            
            const mdx=mouse.x-p.x;
            const mdy=mouse.y-p.y;
            const mouseDistance = Math.sqrt(mdx * mdx + mdy * mdy);

            let repelX = 0;
            let repelY = 0;

            if(mouseDistance<mouse.radius){

              const force = (mouse.radius - mouseDistance) / mouse.radius;
              const angle = Math.atan2(mdy, mdx);
              repelX = -Math.cos(angle) * force * 3; 
                repelY = -Math.sin(angle) * force * 3;
            }

            const springTension=0.08;
            const friction=0.85;
            p.vx+=(dx*springTension) +repelX; //add acceleration
            p.vy+=(dy*springTension) +repelY;

            //friction
            p.vx*=friction;
            p.vy*=friction;
            p.x+=p.vx; //update position
            p.y+=p.vy;

            if (Math.abs(p.vx) > 0.01 || Math.abs(dx) > 0.01) {
             still_moving = true;
      }

            const dist = Math.sqrt(dx * dx + dy * dy);
            const assemblyProgress = Math.max(0, 1 - dist / 100); 
            const time = Date.now() * 0.002;
            const shimmerOscillation = Math.sin(time + p.shimmer) * 0.2;
            p.currAlpha = (p.baseAlpha * assemblyProgress) + shimmerOscillation;
            const finalAlpha = Math.max(0, Math.min(1, p.currAlpha));


          ctx.fillStyle = `rgba(210, 210, 210, ${finalAlpha})`; 
          ctx.font = `${p.fontSize}px monospace`;
      
          ctx.fillText(p.char, p.x, p.y);



        }
        );
        animationRef.current = requestAnimationFrame(animate);
    };
  animate();
    };
  

export default function Ascii({imgSrc}){
    const canvasRef=useRef(null);
    const animationRef=useRef(null);
    
    useEffect(()=>{
        const canvas=canvasRef.current;
        if(!canvas){return;}

        const ctx=canvas.getContext('2d');
        const size=calculateSize(window.innerWidth);
        const isMobile=window.innerWidth<=480;

        // Get the display's pixel ratio
        const dpr = window.devicePixelRatio || 1;
        
        // Scale the internal resolution up
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        
        // Force the visual size to remain the same via CSS
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;
        
        // Normalize the drawing coordinates to match the new scale
        ctx.scale(dpr, dpr);

        const img=new Image();
        let mouse = { x: -1000, y: -1000, radius: isMobile ? 30 : 70 };

        const handleMouseMove=(e)=>{
          const rect = canvas.getBoundingClientRect();
          mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;


        }

        const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

        img.onload=() =>{
            const raw=processImage(img,size);
            const pixels=createParticlesfromRaw(raw,isMobile);
            alignPixels(ctx,size,size,pixels,animationRef,mouse);
        };

        img.onerror = () => {
            console.error(`Failed to load image from path: ${imgSrc}. Check your public folder and file name.`);
        }
        img.src=imgSrc;


        return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [imgSrc]);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <canvas 
        ref={canvasRef} 
        style={{ display: 'block', outline: 'none' }}
      />
    </div>
  );
}

