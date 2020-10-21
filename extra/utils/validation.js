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
function validateEmail(email){
    regex=/@successive.tech$/i;
    return regex.test(email);
}
function validateUsers(arr) {
    const invalidUsers = [];
    const validUsers = [];
    arr.forEach(function (user) {
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
let len1=validUsers.length;
let len2=invalidUsers.length;
console.log(len1 +" Users are Valid: ", validUsers)
console.log(len2 +" Users are Invalid: ", invalidUsers)
}
validateUsers(users);
