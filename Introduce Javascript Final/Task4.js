const pisahAngka = (angka) => {
  let urai;
  let susun;
  urai = angka.toString().split(0); 
  susun = urai.map((larik) => 
  larik.split("").sort().join(""));
  console.log(susun.join(""));
};
  pisahAngka(5956560159466056)
