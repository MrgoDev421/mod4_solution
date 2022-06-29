var names= new Array();
names [0] = "Diegov";
names [1] = "Kolarov";
names [2] = "Freddy";
names [3] = "Jason";
names [4] = "Larry";
names [5] = "Robert";
names [6] = "joaquin";
names [7] = "Alicia";
names [8] = "Wallace";
names [9] = "Shakur";



for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)=='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello " + names[i])
    }

}