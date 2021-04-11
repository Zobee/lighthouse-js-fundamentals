let inc = 100;

while(inc <= 200){
  if(inc % 3 === 0 && inc % 4 === 0){
    console.log("LoopyLighthouse")
  } else if(inc % 3 === 0){
    console.log("Loopy")
  } else if(inc % 4 === 0){
    console.log("Lighthouse")
  } else {
    console.log(inc);
  }
  inc++
}