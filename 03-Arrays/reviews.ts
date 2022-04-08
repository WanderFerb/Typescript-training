let reviews : number[] = [5,4,3,2,1];

let total : number = 0;

for (let index = 0; index < reviews.length; index++) {
    console.log(reviews[index]);
    total += reviews[index];
}

 let average : number  = total / reviews.length;
 console.log("Average is : " + average);

