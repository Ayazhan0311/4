    let a = document.getElementById('startingbid').value;
    
    const startingBid = document.getElementById("startingbid"); 
    const skills = document.getElementsByClassName("skills"); 
    
    const calculate = () => {
        let price = Number(startingBid.value) 
        price = getCheckboxValuesReduce(skills, price)
    }
    
    
    const getCheckboxValuesReduce = (html_collection, price) => {
        let list = Array.from(html_collection)  
        let result = list.reduce((price, item) => {  
            if (item.checked) {
                return price + Number(item.value) 
            }
        }, price)
        return result;
    }

const age = document.getElementsByName("age"); 

const calculate = () => {
    let price = Number(startingBid.value); 
    price = getRadioValue(age, price);
}

const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}


  
    document.getElementById("submit").addEventListener("click", myFunction);
    function myFunction() {
      document.getElementById("result").innerHTML = "The price for your groom"+ a; "Your love letter is:" + I do not know what to write here;
    }
}