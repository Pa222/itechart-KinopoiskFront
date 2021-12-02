export const InfoMessages = {
    ConnectionFail: "Connection failed: ",
    IncorrectAuth: "Incorrect username or password",
    ChangesSaved: "Changes saved",
    RegistrationSuccess: "Registration success. Go to login page to auth",
    RegistrationFail: "Registration fail. User with this email already exists",
    CardNumberRequierd: "Card number is required",
    CardHolderRequired: "Card holder name is required",
    IncorrectExpiry: "Incorrect expiry",
    ExpiryRequired: "Expiry is required",
    CvcRequired: "cvc is required",
    MinimumLength6: "Minimum length: 6 symbols",
    Required: "Field is required",
    IncorrectEmail: "Incorrect email format",
    PasswordsMustMatch: "Passwords must match",
    FieldTooLong: "Field is too long",
    IncorrectCardNumber: "Check your card number",
    IncorrectPhoneNumber: "Check your phone number",
}

export const FieldNames = {
    Number: "number",
    Expiry: "expiry",
    CardHolderName: "cardHolderName",
    Cvc: "cvc",
    Email: "email",
    Password: "password",
    RepeatPassword: "repeatPassword",
    Name: "name",
    PhoneNumber: "phoneNumber",
    Gender: "gender",
}

export const Sex = {
    Male: "Male",
    Female: "Female",
    Undefined: "Undefined",
}

export const ConnectionHubMethods = {
    ConnectAsAdmin: "ConnectAsAdmin",
    GetAdminInformation: "GetAdminInformation",
    ReceiveMessages: "ReceiveMessages",
    ReceiveMessage: "ReceiveMessage",
    ReceiveAdminInformation: "ReceiveAdminInformation",
    UpdateAdminInformation: "UpdateAdminInformation",
    SendMessageToUser: "SendMessageToUser",
    SendMessageToAdmin: "SendMessageToAdmin",
}

export const UserRoles = {
    User: "User",
    Admin: "Admin",
}