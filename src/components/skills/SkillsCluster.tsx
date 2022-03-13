import { Vector3 } from "@react-three/fiber";
import { Line, Html } from "@react-three/drei";

function SkillsCluster({ wordPosition, word }: { wordPosition: any; word: string | Vector3 }) {
	return (
		<>
			<Line
				points={[
					[wordPosition.x, wordPosition.y, wordPosition.z],
					[0, 0, 0]
				]}
				color="white"
				lineWidth={1}
				dashed={true}
				dashScale={10}
			/>
			<Html position={wordPosition} center>
				<b className="skill-item" style={{ font: process.env.PUBLIC_URL + "/fonts/Inter-Bold.woff" }}>
					{word}
				</b>
			</Html>
		</>
	);
}

export default SkillsCluster;
