//Q4. Program to display only elements containing 'a' in the term of array //

var array=["Mango","Orange","Cherry","Grapes"];
console.log("Elements in array: " + array);
for(let i=0;i<array.length;i++)
{
    let ele=array[i];
    for(let j=0;j<ele.length;j++)
    {
        if(ele[j]==='a')
        {
         console.log("Elemnts in array that contains 'a' ");
         console.log(ele);
         break;
        }
        
    }
}