import { PhysicsEngine, PlayerState } from "./src/engine";

interface ControlState {
  forward: boolean;
  back: boolean;
  left: boolean;
  right: boolean;
  jump: boolean;
  sneak: boolean;
}

declare module "@miner-org/mineflayer-physics-reworked" {
  PhysicsEngine;
  PlayerState;
}

declare module "mineflayer" {
  interface Bot {
    physics: PhysicsEngine;
    physicsEnabled: boolean;
  }
}
