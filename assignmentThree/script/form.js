// Example: Save form data to localStorage
function saveFormData(formId) {
    const form = document.getElementById(formId);
    const data = {};
    Array.from(form.elements).forEach(element => {
        if (element.name) {
            data[element.name] = element.value;
        }
    });
    localStorage.setItem('formData', JSON.stringify(data));
}

// Usage: saveFormData('myForm');