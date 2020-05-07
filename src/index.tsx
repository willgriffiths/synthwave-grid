import * as React from "react"
import { render } from "react-dom"
import * as THREE from "three"
import FPSStats from "react-fps-stats"
import { Canvas, useFrame } from "react-three-fiber"
import "./styles.css"

const COLORS: { [key: string]: THREE.Color } = {
  codGray: new THREE.Color(0x121212),
  brightTurquoise: new THREE.Color(0x39f5e6),
  wewak: new THREE.Color(0xffd8bb),
  mandy: new THREE.Color(0xe84971),
}

var geometry = new THREE.BufferGeometry()

const getEmptyGrid = (size: number = 80, segments: number = 60) => {
  const verticeCount = segments + 1
  const spacing = size / segments
  const gridArray = [...Array(size * segments)]
    .map(() => 0)
    .map((_x, i) => [
      (i % verticeCount) * spacing,
      Math.floor(i / verticeCount) * spacing,
      0,
    ])
  console.log({ gridArray1: gridArray[7] })
}
getEmptyGrid()
function BufferGrid(size: number = 80, segments: number = 60) {
  // const verticies = React.useRef<THREE.Float32BufferAttribute>(
  //   new THREE.Float32BufferAttribute(vertices, 3)
  // )
  return (
    <mesh>
      <bufferGeometry attach="mesh" />
      <material attach="mesh" color={COLORS.mandy} />
    </mesh>
  )
}

function Grid() {
  const gridRef = React.useRef<THREE.GridHelper>()

  // useFrame(({ clock }) => {
  //   gridRef.current.position.z =
  //     (clock.getElapsedTime() % 1) * (SIZE / SEGMENTS)
  // })
  return (
    <BufferGrid />
    // <gridHelper
    //   ref={gridRef}
    //   position={[0, -10, 0]}
    //   args={[SIZE, SEGMENTS, COLORS.mandy, COLORS.mandy]}
    // />
  )
}

function App() {
  return (
    <>
      <FPSStats />
      <Canvas camera={{ position: [0, 0, 15] }}>
        <fog attach="fog" args={[COLORS.codGray, 5, 30]} />
        <Grid />
      </Canvas>
    </>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
