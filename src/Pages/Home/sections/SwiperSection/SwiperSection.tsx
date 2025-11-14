import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaPython, FaJs, FaPhp, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
  FaBootstrap, FaWordpress, FaFigma, FaDatabase, FaReact, FaNode
} from "react-icons/fa";
import { SiFirebase, SiMongodb, SiFlutter } from "react-icons/si";

const skills = [
  { name: "Bootstrap",  icon: <FaBootstrap color="#7952B3" size={40} />, orbit: 4, angle: 0.0 },
  { name: "HTML",       icon: <FaHtml5 color="#E34F26" size={40} />,     orbit: 1, angle: 85 },
  { name: "Python",     icon: <FaPython color="#02569B" size={40} />,    orbit: 1, angle: 330.3 },
  { name: "MongoDB",    icon: <SiMongodb color="#4DB33D" size={40} />,   orbit: 4, angle: 39.4 },
  { name: "Firebase",   icon: <SiFirebase color="#FFCA28" size={40} />,  orbit: 4, angle: 110.8 },
  { name: "SQL",        icon: <FaDatabase color="#FF6C37" size={40} />,  orbit: 3, angle: 73.1 },
  { name: "GitHub",     icon: <FaGithub color="#ffffff" size={40} />,    orbit: 3, angle: 139.2 },
  { name: "Git",        icon: <FaGitAlt color="#F05032" size={40} />,    orbit: 4, angle: 168.5 },
  { name: "PHP",        icon: <FaPhp color="#777BB4" size={40} />,       orbit: 2, angle: 188.5 },
  { name: "CSS",        icon: <FaCss3Alt color="#1572B6" size={40} />,   orbit: 3, angle: 229 },
  { name: "Figma",      icon: <FaFigma color="#F24E1E" size={40} />,     orbit: 4, angle: 286.9 },
  { name: "WordPress",  icon: <FaWordpress color="#21759B" size={40} />, orbit: 4, angle: 254.8 },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={40} />,        orbit: 2, angle: 264.8 },
  { name: "Flutter",    icon: <SiFlutter color="#02569B" size={40} />,   orbit: 3, angle: 332.3 },
  { name: "React",      icon: <FaReact color="#61DBFB" size={40} />,     orbit: 4, angle: 212.13 },
  { name: "Node.js",    icon: <FaNode color="#289b02ff" size={40} />,    orbit: 4, angle: 910.9 },
];

const orbitSizes = [195, 320, 420, 540]; // diâmetros base
const iconSize = 56;
const angleOffset = 10;

const SkillsOrbit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState(760);

  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        setContainerSize(containerRef.current.offsetWidth);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Container>
      <Title>Hard Skills</Title>
      <OrbitContainer ref={containerRef}>
        <Glow />
        {orbitSizes.map((size, i) => (
          <Orbit key={i} size={(size / 760) * containerSize} />
        ))}

        {skills.map((skill) => {
          const radius = (orbitSizes[skill.orbit - 1] / 760) * containerSize / 2 - iconSize / 2;
          const angle = skill.angle + angleOffset;

          return (
            <OrbitItem key={skill.name} angle={angle} radius={radius}>
              <IconInner>{skill.icon}</IconInner>
              <Tooltip>{skill.name}</Tooltip>
            </OrbitItem>
          );
        })}
      </OrbitContainer>
    </Container>
  );
};

export default SkillsOrbit;

/* =========== STYLES ============ */

const Container = styled.section`
  width: 100%;
  padding: 2vw 0;
  background: #000;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;

  &::first-letter {
    color: #6c63ff;
    font-size: 3.9rem;
  }
`;

const OrbitContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 760px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  overflow: hidden;
`;

const Orbit = styled.div<{ size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const OrbitItem = styled.div<{ angle: number; radius: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(${({ angle }) => angle}deg)
             translate(${({ radius }) => radius}px)
             rotate(-${({ angle }) => angle}deg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const IconInner = styled.div`
  background: rgba(255,255,255,0.03);
  border-radius: 50%;
  backdrop-filter: blur(6px);
  width: clamp(42px, 6vw, 56px);
  height: clamp(42px, 6vw, 56px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  cursor: pointer;

  svg {
    width: 60%;
    height: 60%;
  }

  &:hover {
    transform: scale(1.18);
    box-shadow: 0 0 26px rgba(108,99,255,0.35);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: -34px;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  background: rgba(108,99,255,0.95);
  color: #fff;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: clamp(0.72rem, 2.2vw, 0.8rem);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.18s ease;

  ${IconInner}:hover + & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const glowPulse = keyframes`
  0% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
  100% { opacity: 0.6; transform: scale(1); }
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(108,99,255,0.25), rgba(108,99,255,0.12) 30%, rgba(0,0,0,0) 60%);
  filter: blur(28px);
  z-index: 1;
  animation: ${glowPulse} 4s ease-in-out infinite;
`;
