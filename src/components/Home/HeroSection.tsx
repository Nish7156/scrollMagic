// @ts-ignore *//
import React,{useEffect, useState} from 'react'
import gsap from 'gsap'

function HeroSection() {

    useEffect(() => {
        console.clear();

        gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
        gsap.defaults({ease: "none"});
        
        gsap.set(".ball", {xPercent: -50, yPercent: -50})
        
        const pulses = gsap.timeline({
          defaults: {
            duration: 10, 
            autoAlpha: 1, 
            scale: 2, 
            transformOrigin: 'center', 
            ease: "elastic(2.5, 1)"
          }})
        
        const main = gsap.timeline({defaults: {duration: 1},
          scrollTrigger: {
            trigger: "#svg",
            scrub: true,
            start: "top center",
            end: "bottom center"
          }})
        .to(".ball01", {duration: 0.01, autoAlpha: 1})
        .from(".Path_1", {drawSVG: 0}, 0)
        .from(".Path_2",{drawSVG:0})
        .from(".Path_3",{drawSVG:0})
        .from(".Path_4",{drawSVG:0})
        .from(".Path_5",{drawSVG:0})
        .from(".Path_6",{drawSVG:0})
        .to(".ball01", {motionPath: {
          path: ".Path_5", 
          align:".Path_5",
          alignOrigin: [0.5, 0.5],
        }}, 0)
        .add(pulses, 0);
        
        
    }, [])
    
    
  return (
    <>
    <div className='container overflow-auto border-2'>
       <svg id='svg' xmlns="http://www.w3.org/2000/svg" className='w-full' height="741.471" viewBox="0 0 1165.529 741.471">
  <path id="Path_7" className='Path_1' data-name="Path 7" d="M879.309,534.177c-.953-1.964-.156-9.2-3.666-7.177q-7.659,7.432-15.261,14.922c-3.084,3.712,13.163,6.268,15.737,8.261,9.454,4.741,5.624-1.905,4.768-7.939,17.069-8.188,31.479-24.525,33.711-44.332,6.752-39.722-35.505-74.591-72.885-57.9-25.228,10.091-39.279,40.061-31.759,66.022,2.3,5.848,9.261,1.313,6.635-3.858a48.261,48.261,0,0,1,5.268-35.2c15.474-29.284,60.543-31.415,78.029-2.992C916.171,487.469,905.89,523.344,879.309,534.177Z" transform="translate(-537.686 -435.735)" fill="#00b2ed"/>
  <path id="Path_5291" className='Path_2' data-name="Path 5291" d="M819,349S403,449,526,531" transform="translate(-501.757 -240.939)" fill="none" stroke="#00b2ed" stroke-width="3"/>
  <path id="Path_5292" className='Path_3' data-name="Path 5292" d="M525.75,531c40,29.25,193.417,82.313,437.75,79.313" transform="translate(-501.757 -240.939)" fill="none" stroke="#00b2ed" stroke-width="3"/>
  <path id="Path_5293" className='Path_4' data-name="Path 5293" d="M963,610.325C966,610,1136,610,1273,592" transform="translate(-501.757 -240.939)" fill="none" stroke="#00b2ed" stroke-width="3"/>
  <path id="Path_11" className='Path_5' data-name="Path 11" d="M1212.806,667.87c17.688-2.75,640.118-87.94,282.869,193.288" transform="translate(-442.063 -316.747)" fill="none" stroke="#00b2ed" stroke-miterlimit="10" stroke-width="3"/>
  <path id="Path_12" className='Path_6' data-name="Path 12" d="M1556,884s-182.667,144-326,196" transform="translate(-501.757 -339.939)" fill="none" stroke="#00b2ed" stroke-width="3"/>

   {/* <path className="Path_1" id="Path_5291" data-name="Path 5291" d="M819,349S403,449,526,531" transform="translate(-501.757 -347.542)" fill="none" stroke="#00b2ed" stroke-width="3"/>
  <path className="Path_2" id="Path_5292" data-name="Path 5292" d="M525.75,531c40,29.25,193.417,82.313,437.75,79.313" transform="translate(-501.757 -347.542)" fill="none" stroke="#00b2ed" stroke-width="3"/>
  <path className="Path_3" id="Path_5293" data-name="Path 5293" d="M963,610.325C966,610,1136,610,1273,592" transform="translate(-501.757 -347.542)" fill="none" stroke="#00b2ed" stroke-width="3"/> */}
</svg>
    </div>
    </>
  )
}

export default HeroSection