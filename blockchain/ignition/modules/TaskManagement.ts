import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("TaskManagement", (m) => {
  const taskMgm = m.contract("TaskManagement", []);

  return { taskMgm };
});
