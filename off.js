let arr=[200,300,250,450,400]

for(let i=0;i<arr.length;i++){
 offer = arr[i]/10 ;
arr[i]-=offer;
}
console.log(arr)