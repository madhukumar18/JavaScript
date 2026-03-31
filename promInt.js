console.log("start");

async function madhu() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("madhu");
      res();
    }, 2000);
  });
}

async function main() {
  await madhu();   // wait here

}

main();
  console.log("stop");