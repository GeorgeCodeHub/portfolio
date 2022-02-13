import React from "react";

import { Bloom } from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize } from "postprocessing";

function BloomEffect() {
	return (
		<Bloom
			intensity={5.0} // The bloom intensity.
			blurPass={BlurPass} // A blur pass.
			width={Resizer.AUTO_SIZE} // render width
			height={Resizer.AUTO_SIZE} // render height
			kernelSize={KernelSize.LARGE} // blur kernel size
			luminanceThreshold={1.5} // luminance threshold. Raise this value to mask out darker elements in the scene.
			luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
		/>
	);
}

export default BloomEffect;
