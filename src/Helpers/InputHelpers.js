export const validateNumberOnlyInput = (e) => {
    var key = String.fromCharCode(e.keyCode || e.which);
    !/[0-9]/.test(key) && e.preventDefault();
}

export const validateTextOnlyInput = (e) => {
    var key = String.fromCharCode(e.keyCode || e.which);
    /[0-9]/.test(key) && e.preventDefault();
}
