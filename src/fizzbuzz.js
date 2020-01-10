    function convert(i) {

      if (calcModuleOfThreeAndfive(i) == 0) return "FizzBuzz";
      if (calcModuleOfThree(i) == 0) return "Fizz";
      if (calcModuleOfFive(i) == 0) return "Buzz";

        return String(i);
    }

    function calcModuleOfThree (numberToCalc){
      return numberToCalc % 3;
    }

    function calcModuleOfFive (numberToCalc){
      return numberToCalc % 5;
    }

    function calcModuleOfThreeAndfive (numberToCalc){

      return calcModuleOfThree(numberToCalc) + calcModuleOfFive(numberToCalc);
    }