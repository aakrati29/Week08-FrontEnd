let number = [];
    for(let i = 0; i < 10; i++){
        let ramdomThreeDigitNum = Math.floor(Math.random() * 990) + 100;
        number.push(ramdomThreeDigitNum);
    }

    number.sort((a, b) => a - b);
    console.log("Ten random numbers are : " + number);

    let min = Infinity;
    let secondMin = Infinity;
    let max = -Infinity;
    let secondMax = -Infinity;

   for(let num of number){
    if(num < min){
        secondMin = min;
        min = num;
    }
    else if(num < secondMin && num !== min){
        secondMin = num;
    }

    if(num > max){
        secondMax = max;
        max = num;
    }

    else if(num > secondMax && num !== max){
        secondMax = num;
    }
   }

   console.log("Second maximum is : " + secondMax);
   console.log("Second minimum is : " + secondMin);
