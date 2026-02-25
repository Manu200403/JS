let arr=[1,2,"MANU",true]//elements can be of any datatypes
   console.log(arr[0]);
   
   const newarr=new Array(1,2,3,100,200,300)
   console.log(newarr[1]);
   

   //methods
   newarr.push(4)
   newarr.pop()
   newarr.unshift(9)
   console.log(newarr);
   newarr.shift()
   console.log(newarr);
   console.log(newarr.includes(9));
    console.log(newarr.includes(2));

   const myarr=newarr.join()
   console.log(myarr);
   console.log(typeof myarr);
   
   //slice-does not include range if slice(1,3) it will only print 1,2
    const myn1=newarr.slice(1,3)
    console.log(myn1);

    //splice-remove elemnts from original array itselfs ex-arr=12345 splice(1,3) then it removes 2,3 and arr looks like 1,4,5
     const myn2=newarr.splice(1,3)
    console.log(myn2);
    console.log(newarr);
    
    
   
   