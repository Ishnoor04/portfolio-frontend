import React from "react";
import Particles from "react-tsparticles";
import { ParticleConfig } from "./congif/particleConfig";
export default function ParticleBackground() {
    return (
        <Particles params={ParticleConfig}></Particles>
    )
}