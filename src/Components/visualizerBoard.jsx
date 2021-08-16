import React, { Component } from "react";
import Node from './Node/Node';
import getAnimation from './SortingAlgorithms/SimpleSort';
import './BoardStyle.css';
import { buubleSort, insertionSort, mergedArray, mergeSort, selectionSort } from "./Algorthim/algorthim";
const start_button = document.getElementById('start');


let  ANIMATION_SPEED = 10;
let NUMBER_OF_NODES = 25;


const algorithm_option = document.getElementById("algorithm_option");
const speed_option = document.getElementById("speed_option");   
const Array_list = document.getElementById("Array_list");
const generator_range_option = document.getElementById("generator_range_option");
const generator_option = document.getElementById("generator_option");
// const save_button = document.getElementById("save_button");

let Array_list_value = null;
let generator_range_option_value = null;
let speed_option_value = null;
let algorithm_option_value = null;
let Data_Structure_option_value = null;
algorithm_option_value = algorithm_option.value;

let RandomObistcalesValue = true;

// generator_range_option.addEventListener('input' , (e)=>{
//     e.preventDefault(); 
//     generator_range_option_value = generator_range_option.value;
//     NUMBER_OF_NODES = Number(generator_range_option_value);
//     document.getElementById("range_option").innerHTML = generator_range_option.value;
// })
speed_option.addEventListener('input' , (e)=>{
    e.preventDefault();
    speed_option_value = speed_option.value;
    ANIMATION_SPEED = Number(speed_option_value);
    document.getElementById("speed_option_option").innerHTML = speed_option.value;
})
Array_list.addEventListener('input',(e)=>{
    e.preventDefault();
    console.log(Array_list.value);
    Array_list_value = Array_list.value;
    RandomObistcalesValue = false;

})

algorithm_option.addEventListener('input',(e)=>{
    e.preventDefault();
    algorithm_option_value = algorithm_option.value;

})




class Board extends Component{
    constructor(props){
        super(props)
        this.state = {
            myArray : []
        }
    }
    componentDidMount(){
        generator_range_option.addEventListener('input' , (e)=>{
            e.preventDefault();
            generator_range_option_value = generator_range_option.value;
            NUMBER_OF_NODES = Number(generator_range_option_value);
            document.getElementById("range_option").innerHTML = generator_range_option.value;
            RandomObistcalesValue = true;
            let myArray = this.generateNewObjects();
            this.setState({myArray});
        })
        
        let myArray = this.generateNewObjects();
        this.setState({myArray});
        
    }
    generateNewObjects(){
        let myArray = [];
        let repeated = [];
        let i =0;
        while(i < NUMBER_OF_NODES){
            let n = Math.floor(Math.random() * 200);
            if(!repeated.includes(n)){
                myArray.push(creatNewNode(i, n));
                repeated.push(n);
                i++;
            }
        }
        // for(let i = 0;i<NUMBER_OF_NODES;i++){
        //     myArray.push(creatNewNode(i, Math.floor(Math.random() * 100)));
        // }
        return myArray;
    }
    animateBoard(data){
        const dumbArray = this.state.myArray;
        const animation = data;
        let previous_item1 = null;
        let previous_item2 = null;
        
        for(let i = 0;i<animation.length;i++){
          

                    const [firstNode , SecondNode] = animation[i];
                    let item1 = document.getElementById('node-'+dumbArray[firstNode].index);
                    let item2 = document.getElementById('node-'+dumbArray[SecondNode].index);
                    setTimeout(()=>{
                            swappingColoron(item1);
                            swappingColoron(item2);
                    } , i * ANIMATION_SPEED)
               
             
                    setTimeout(()=>{
                        const [firstNode , SecondNode] = animation[i];
                        let temp = dumbArray[firstNode];
                        dumbArray[firstNode] = dumbArray[SecondNode];
                        dumbArray[SecondNode] = temp;
                        this.setState({myArray : dumbArray});
                    } , i *ANIMATION_SPEED)

                    setTimeout(()=>{
                        // if(previous_item1 != null){
                        
                                swappingColoroff(item1);
                                swappingColoroff(item2);
                            
                        // }
                    } , i * ANIMATION_SPEED + ANIMATION_SPEED)

                    previous_item1 = item1;
                    previous_item2 = item2;
        

        }
    }
    
    async startAlgorithm(){
        // const dumbArray = this.state.myArray;
        // const n = dumbArray.length;
        //     for(let i = 0; i <n-1;i++){
        //         for(let j = 0 ; j<n-i-1;j++){
        //         setTimeout(()=>{
        //             const dump_i = i;
        //             const dump_j = j;
        //             if(dumbArray[j].ElementValue >dumbArray[j+1].ElementValue){

        //                 let item1 = document.getElementById('node-'+dumbArray[j].index);
        //                 let item2 = document.getElementById('node-'+dumbArray[j+1].index);
        //                 setTimeout(()=>{
        //                     swappingColoron(item1);
        //                     swappingColoron(item2);
        //                 } , dump_i + dump_j + 2 )
                        
                    
        //                     let temp = dumbArray[dump_j];
        //                     dumbArray[dump_j] = dumbArray[dump_j+1];
        //                     dumbArray[dump_j+1] = temp;
        //                     this.setState({myArray : dumbArray});
                        
        //                 setTimeout(()=>{
        //                     swappingColoroff(item1);
        //                     swappingColoroff(item2);
        //                 } , dump_i + dump_j + 8 )
        //             }
        //         } , i + j + 10 )
                 

        //         }
            // }
      
        if(!RandomObistcalesValue){
            let myarray2 = [];
            Array_list_value = Array_list_value.split([" "]);
        
            for(let i = 0;i<Array_list_value.length;i++){
                    if(Array_list_value[i] != "")
                        myarray2.push(creatNewNode(i, Number(Array_list_value[i])));
              
            }
            console.log(myarray2);
            this.setState({myArray : myarray2});
            const dumbArray = myarray2;
            const sendedArray = []
            for(let x = 0;x<dumbArray.length;x++){
                sendedArray.push(dumbArray[x].ElementValue)
            }
            // code is here

        }else{
            const dumbArray = this.state.myArray;
            const sendedArray = []
            for(let x = 0;x<dumbArray.length;x++){
                sendedArray.push(dumbArray[x].ElementValue)
            }
            // code is here 
            
            if(algorithm_option_value == 1){
                const data = buubleSort(sendedArray)
                this.animateBoard(data)
            }else if(algorithm_option_value == 2){
                const data = selectionSort(sendedArray)
                this.animateBoard(data)
            }else if (algorithm_option_value == 3){
                const data = insertionSort(sendedArray);
                this.animateBoard(data);
            }else if (algorithm_option_value == 4){
                mergeSort(sendedArray ,0 , sendedArray.length-1 );
                this.animateBoard(mergedArray);
            }
          
        }
      
       

      
    }

    render(){
        const {myArray} = this.state;
        return(
            <React.Fragment>
                <div class="fluied-container text-center">
                    <button id="start" className="btn btn-primary text-center" onClick={()=>this.startAlgorithm()}>Start</button>
                </div>
                <div className = "main-container">
                 
                    {myArray.map((NodeElement , nodeIndex)=>{
                        const {index , ElementValue , onSelection , width , sorted} = NodeElement
                        return(
                            <Node
                            key = {nodeIndex}
                            index = {index}
                            ElementValue = {ElementValue}
                            onSelection = {onSelection}
                            width = {width}
                            Sorted = {sorted}
                            ></Node>
                        );
                        
                    })}
                </div>
            </React.Fragment>
        );
    };

}


function creatNewNode(id , val){
    return {
        index : id,
        ElementValue : val,
        onSelection : false,
        width : 15,
        sorted : false
     }
}

const swappingColoron = (obj)=>{
    obj.classList.add("swap");
}
const swappingColoroff = (obj)=>{
    obj.classList.remove("swap");
}

export default Board;