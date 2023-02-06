const main = async () => {
  // Compile contract and gernate neccessary file for running contract under Artifact folder
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract already deployed to: ", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log({ error });
    process.exit(1);
  }
};

runMain();
