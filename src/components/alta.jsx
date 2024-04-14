import React, { useState } from 'react';
import { validateForm } from '../helpers/validations';
import '../styles/alta-styles.scss';

const Alta = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        categoria: '',
        precio: '',
        stock: '',
        marca: '',
        edadDesde: '',
        edadHasta: '',
        descripcionCorta: '',
        descripcionLarga: '',
        foto: '',
        envioSinCargo: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: fieldValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Aquí puedes enviar los datos del formulario a tu API o realizar alguna acción
            alert('Formulario enviado correctamente');
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="alta-container">
            <h2>Alta de Productos</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    {errors.nombre && <span className="error">{errors.nombre}</span>}
                </div>

                <div className="form-group">
                    <label>Categoría:</label>
                    <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} />
                    {errors.categoria && <span className="error">{errors.categoria}</span>}
                </div>

                <div className="form-group">
                    <label>Precio:</label>
                    <input type="number" name="precio" value={formData.precio} onChange={handleChange} />
                    {errors.precio && <span className="error">{errors.precio}</span>}
                </div>

                <div className="form-group">
                    <label>Stock:</label>
                    <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
                    {errors.stock && <span className="error">{errors.stock}</span>}
                </div>

                <div className="form-group">
                    <label>Marca:</label>
                    <input type="text" name="marca" value={formData.marca} onChange={handleChange} />
                    {errors.marca && <span className="error">{errors.marca}</span>}
                </div>

                <div className="form-group">
                    <label>Edad Desde:</label>
                    <input type="number" name="edadDesde" value={formData.edadDesde} onChange={handleChange} />
                    {errors.edadDesde && <span className="error">{errors.edadDesde}</span>}
                </div>

                <div className="form-group">
                    <label>Edad Hasta:</label>
                    <input type="number" name="edadHasta" value={formData.edadHasta} onChange={handleChange} />
                    {errors.edadHasta && <span className="error">{errors.edadHasta}</span>}
                </div>

                <div className="form-group">
                    <label>Descripción Corta:</label>
                    <textarea name="descripcionCorta" value={formData.descripcionCorta} onChange={handleChange} />
                    {errors.descripcionCorta && <span className="error">{errors.descripcionCorta}</span>}
                </div>

                <div className="form-group">
                    <label>Descripción Larga:</label>
                    <textarea name="descripcionLarga" value={formData.descripcionLarga} onChange={handleChange} />
                    {errors.descripcionLarga && <span className="error">{errors.descripcionLarga}</span>}
                </div>

                <div className="form-group">
                    <label>Foto:</label>
                    <input type="file" name="foto" onChange={handleChange} />
                    {errors.foto && <span className="error">{errors.foto}</span>}
                </div>

                <div className="form-group">
                    <label>Envío sin Cargo:</label>
                    <input type="checkbox" name="envioSinCargo" checked={formData.envioSinCargo} onChange={handleChange} />
                    {errors.envioSinCargo && <span className="error">{errors.envioSinCargo}</span>}
                </div>

                <button type="submit">Guardar Producto</button>
            </form>
        </div>
    );
};

export default Alta;

