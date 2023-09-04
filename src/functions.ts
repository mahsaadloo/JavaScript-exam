export const createAlert = ():HTMLSpanElement => {
    const textAlert = document.createElement("span");
    textAlert.className = "font-medium";
    textAlert.innerText= "Your Data has been deleted !";
    return textAlert;
};

export const validateField = (...fields : string[]) : boolean => {
    return fields.every((field) => !!field.toString());
};