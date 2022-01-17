var secound = function (arr)
{
    function compareNumbers(a, b){
        return b - a;
    }
    console.log(arr.sort(compareNumbers))
    // console.log(arr[1])
    // console.log(arr[3])
}
secound([34,55,22,6,19,4444,3333])