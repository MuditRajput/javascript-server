const users =[
    {
        traineeEmail: 'mudit.rajput@successive.tech',
        reviewerEmail: 'yogesh.singh@successive.tech',
    },
    {
        traineeEmail: 'aviral.swarnkar@successive.tech',
        reviewerEmail: 'avinash.thube@successive.com',
    },
    {
        traineeEmail: 'nikhil.rawat@successive.tech',
        reviewerEmail: 'shalu.sharma@successive.techa',
    }
]
const validateEmail = (email) => {
    regex=/@successive.tech$/i;
    return regex.test(email);
}
const validateUsers = (users) => {
    const invalidUsers = [];
    const validUsers = [];
    users.forEach(function (user) {
        const{traineeEmail, reviewerEmail} = user;
        if(validateEmail(traineeEmail)){
            validUsers.push(traineeEmail);
        }
        else{
            invalidUsers.push(traineeEmail);
        }
        if(validateEmail(reviewerEmail)){
            validUsers.push(reviewerEmail)
        }
        else{
            invalidUsers.push(reviewerEmail)
        }
    }
)
let validNumber=validUsers.length;
let invalidNumber=invalidUsers.length;
console.log(`${validNumber} Users are Valid:`, validUsers)
console.log(`${invalidNumber} Users are Invalid:`, invalidUsers)
}
validateUsers(users);
