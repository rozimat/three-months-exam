
//1-misol
function convert( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}
//2-misol
function sumOfNegatives(arr2) {
  let sum = 0;    
  for (i = 0; i < arr2.length; i++) {    
    if (arr2[i] < 0) {                   
      sum += arr2[i];                  
    }
  }
  return sum;
} 
//3-misol
arrayPlusArray = (arrr1, arrr2) => arrr1.concat(arrr2).reduce((a,b)=>a+b);
//4-misol
function generateAndSum(n){
  let arrrr = [];
  let i=0;
  for(i = 0; i < n; i++){
    arrrr.push(i);
  }
  return arrrr;
}
//5-misol
function removStringSpace(str){
  return str.replace(/\s/g, '');
}
//6-misol
function removStringSpace(aarr) { //bu yerda funksiyani nomi adashib yozilgan shekilli masalani shartida
  if ( aarr.length == 0)
    return [];
  let p = 0;
  let n = 0;
  for (let i=0, j=aarr.length; i<j; i++)
  {
    if (aarr[i] > 0)
      p++;
    else
      n += aarr[i];
  }
  return [p, n];
}
//7-misol
function removStringSpace(aaaarr){
  for(let i=0; i< arr.lenght; i++){
    if (aaaarr[i]==bool){
       return aaaarr[i];
    }
  }
}
