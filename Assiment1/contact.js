

function submitData()
{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const Purpose = document.getElementById("Purpose").value;
    const PurposeBrief = document.getElementById("PurposeBrief").value;
    const MeetingDate = document.getElementById("MeetingDate").value;
    const MeetingTime = document.getElementById("MeetingTime").value;
    const Comments = document.getElementById("Comments").value;


console.log("Name :",name);
console.log("Email id :",email);
console.log("Mobile No :",mobile);
console.log( "Purpose :",Purpose);
console.log("Purpose Brrief :",PurposeBrief);
console.log("Meeting  Date :",MeetingDate);
console.log("Meeting Time :",MeetingTime);
console.log("Comments :",Comments);
}