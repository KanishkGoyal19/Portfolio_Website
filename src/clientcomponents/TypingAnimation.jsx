"use client";
import dynamic from 'next/dynamic';
import { memo } from 'react';

const TypeAnimation = dynamic(() => import('react-type-animation').then(mod => mod.TypeAnimation), { ssr: false });

function TypingAnimationComponent() {
    return (
        <div>
            <h2 className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-clip-text from-orange-500 via-orange-300 to-orange-100 mt-0 mb-0 font-extralight text-2xl text-left text-transparent md:text-3xl lg:text-4xl 2xl:text-5xl ">
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        500, 
                        "...", // Only appears in the first cycle
                        1500, 
                        "A Web Developer",
                        1500, 
                        "A Programmer",
                        1500, 
                        "A Designer",
                        1000,
                        "A Web Developer", // Loop starts here directly with roles
                        1500,
                        "A Programmer",
                        1500,
                        "A Designer",
                    ]}
                    speed={20} 
                    repeat={Infinity} // Infinite loop
                />
            </h2>
        </div>
    );
}

export default memo(TypingAnimationComponent);
