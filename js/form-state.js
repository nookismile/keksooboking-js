const addFormInactiveStay = (form, filters) => {
    form.classList.add('ad-form--disabled');
    [...form.children].forEach((element) => {
        element.disabled = true;
    });
    
    filters.classList.add('ad-form--disabled');
    [...filters.children].forEach((element) => {
        element.disabled = true;
    });
};

const addFormActiveStay = (form, filters) => {
    form.classList.remove('ad-form--disabled');
    [...form.children].forEach((element) => {
        element.disabled = false;
    });
    
    filters.classList.remove('ad-form--disabled');
    [...filters.children].forEach((element) => {
        element.disabled = false;
    });
};

export { addFormInactiveStay, addFormActiveStay };
