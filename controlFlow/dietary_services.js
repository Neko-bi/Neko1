let role = ""
let accessLevel;
switch (role) {
    case "Employee":
        accessLevel = "All dietary services available";
        break;
    case "Enrolled Member":
        accessLevel = "Dietary & Deitician servies available";
        break;
    case "Subscriber":
        accessLevel = "Dietary services available";
        break;
    default:
        accessLevel = "Please enroll to access services"
        break
}
console.log(accessLevel)