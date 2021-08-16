export default function getAnimation(array){
    let animation  = [];
    let  dumyArray = [...array];
    doAnimation(dumyArray, animation);
    // console.log(animation);
    return animation;
} 

const doAnimation = (array , animation)=>{
    for(let i = 0;i<array.length;i++){
        for(let j = 0; j <array.length - i - 1;j++){
            if(array[j].ElementValue > array[j+1].ElementValue){
                animation.push([j,j+1]);
                swap(array , j , j+1);
            }
        }
    }

}

const swap = (array , i , j)=>{
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp;
}