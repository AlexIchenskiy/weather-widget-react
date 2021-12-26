let date = new Date;

//const date = new Date('December 17, 1995 03:00:00');
//const date = new Date('December 17, 1995 08:00:00');
//const date = new Date('December 17, 1995 15:00:00');
//const date = new Date('December 17, 1995 20:00:00');

let hours = date.getHours();

let period;

if (hours >= 0 && hours <= 6) {
    period = 1;
} else if (hours > 6 && hours <= 12) {
    period = 2;
} else if (hours > 12 && hours <= 18) {
    period = 3;
} else {
    period = 4;
}

export default period;