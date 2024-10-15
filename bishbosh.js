

    const output = document.querySelector('#demoDiv')
    const btn1 = document.querySelector('#starter')

    
function startBishBosh(){

    let bishVariable = document.getElementById("bishInput").value;
    let boshVariable = document.getElementById("boshInput").value;
    let number = document.getElementById("numberCount").value;
    BishBosh(bishVariable, boshVariable, number);
}

function getBishBosh(bish, bosh, number) {
    let result = '';
    if (number % bish === 0) {
        result = number % bosh == 0 ? 'bishbosh' : 'bish'
       
    }
    else if (number % bosh === 0) {
        result = 'bosh'
    }
    return (result)
}

function BishBosh(bish, bosh, number) 
{
    output.innerHTML=''
    const outputArray = [];
    for (let index = 1; index < +number + 1; index++) 
        {

        result = getBishBosh(bish, bosh, index)
        let message = result 
       
    outputArray.push(message);
    printResults(index, message)
    }
}

function printResults(index, result){
    
    console.log('reached point 1')
    
    output.innerHTML += `
    <h5> ${index} ${result} </h5>
    `
    
    console.log('reached point 3')
}

btn1.addEventListener('click', startBishBosh)


