// validations.js

export const validateForm = (formData) => {
    const errors = {};

    if (!formData.nombre) {
        errors.nombre = 'El nombre es obligatorio';
    }

    if (!formData.precio) {
        errors.precio = 'El precio es obligatorio';
    }

    if (!formData.stock) {
        errors.stock = 'El stock es obligatorio';
    }

    if (!formData.marca) {
        errors.marca = 'La marca es obligatoria';
    }

    if (!formData.categoria) {
        errors.categoria = 'La categoría es obligatoria';
    }

    if (!formData.descripcionCorta) {
        errors.descripcionCorta = 'La descripción corta es obligatoria';
    }

    if (!formData.descripcionLarga) {
        errors.descripcionLarga = 'La descripción larga es obligatoria';
    }

    if (!formData.edadDesde) {
        errors.edadDesde = 'La edad desde es obligatoria';
    }

    if (!formData.edadHasta) {
        errors.edadHasta = 'La edad hasta es obligatoria';
    }

    if (formData.edadDesde && formData.edadHasta && formData.edadDesde >= formData.edadHasta) {
        errors.edadDesde = 'La edad desde debe ser menor que la edad hasta';
        errors.edadHasta = 'La edad hasta debe ser mayor que la edad desde';
    }

    return errors;
};

