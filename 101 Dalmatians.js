https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/javascript

    function howManyDalmatians(number) {

        var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]

        return (number <= 10) ? dogs[0] : (number <= 50) ? dogs[1] : (number === 101) ? dogs[3] : dogs[2];

    }