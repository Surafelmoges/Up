const nums = [10,20,30];
console.log(nums);

nums[2]=99;
console.log(nums);

function getLastValue(array){
    
    const lastindex = array.length - 1;
    return array[lastindex];

}
console.log(getLastValue([1,6,12,19,21,29]));
console.log(getLastValue(['Addis','Moges','Elsi','Enku']));


 function swapArr(arrayy){
    const lastindex = arrayy.length - 1;

    const fValue = arrayy[0];
    const lValue = arrayy[lastindex];

    arrayy[0] = lValue;
    arrayy[lastindex] = fValue;
    return arrayy;

 }
 console.log(swapArr(['Elsi','Enku','Girma','Surafel','Eliyas']));


 for(let i = 0;i<=5;i++){
    console.log(`Number: ${i} Double: ${i*2}`);
 }
for(let i=5; i>=1;i--){
   console.log(i);
}

let k=0;

while(k<=5){  
   console.log(`Number: ${k} Double: ${k*2}`);
   k++;
}

let f=5;
while(f>=1){
   console.log(f);
   f--;
}

const arrayNumber =[1,2,3];
const a=0;

while(a>arrayNumber.length)
{
   const addNumber =arrayNumber.push(22);
   a++;
   console.log(arrayNumber[0]*2);
}

//const arrayNumber =[];

const arr=[1,2,3];
const result =[];

let i;
for(i=0; i < 3;i++){
   result.push(arr[i]+1);

}
console.log(result);



function addNumber(array){
   const res=[];
   let i;
for(i=0; i < array.length;i++){
     res.push(array[i]+2);
   }
   return res;

}
console.log(addNumber([1,2,3]));
console.log(addNumber([-1,0,1,100]));


function addNum(arrayy,num){
   const resultt =[];
   let m;
for(m=0; m < arrayy.length;m++){
     resultt.push(arrayy[m]+num);
   }
   return resultt;

}
console.log(addNum([1,2,3],2));
console.log(addNum([1,2,3],3));
console.log(addNum([-2,-1,0,99],2));

function addArrays(array1, array2){
   const resuu =[];
   let f;
   for(f =0; f<3; f++){
   resuu.push(array1[f] + array2[f]);
}
return resuu;
}
console.log(addArrays([1,1,2],[1,1,3]));
console.log(addArrays([1,2,3],[4,5,6]));


function countPostive(nums){
   let posNumbers =0;
   let i=0;
   for(i=0;i<nums.length;i++){
      if(nums[i]>=0){
         posNumbers = posNumbers+1;
      }
   
   }
   return posNumbers;

}
console.log(countPostive([1,-3,-4,-4,-5]));
console.log(countPostive([-2,3,-5,7,10]));


function MinMax(num){

   const result ={
      min :num[0],
      max :num[0]
   };

   for(let b=0;b<num.length;b++){
      const value =num[b];
      if(value<result.min){
         result.min = value;
      }
      if(value>result.max){
         result.max =value;
      }
   }
   return result;
}
console.log(MinMax([8,0,5]));




function countWord(word){
   const couResult ={};
   for(let c=0;c<word.length;c++){
      const compWord =word[c];

      if (!couResult[word]) {
         couResult[word] = 1;
       } else {
         couResult[word]++;
       }
     }

     return couResult;
   }
console.log(countWord(['orange','banana','banana','apple','orange']));