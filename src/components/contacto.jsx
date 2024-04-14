import React, { useState } from 'react';

const Contacto = () => {
    // Estado para manejar los valores del formulario
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        comment: ''
    });

    // Manejador de cambio para actualizar el estado cuando se escriben en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Manejador para enviar el formulario y procesar los datos
    const onSubmitContact = async (event) => {
        event.preventDefault();

        try {
            // Aquí puedes enviar los datos al backend o realizar cualquier otra acción necesaria
            console.log('Datos de contacto:', formData);

            // Ejemplo de enviar los datos usando fetch (puedes adaptarlo según tu backend)
            const response = await fetch('https://tu-backend.com/api/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Lógica después de enviar el formulario (mostrar mensaje de éxito, etc.)
                console.log('Formulario enviado correctamente');
            } else {
                throw new Error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <main className="main-container">
            <img className="banner1" src="../img/icons 2/Bazzar-and-festival.jpg" alt="banner amarillo de festival con muchos juguetes" />
            <div className="container-2">
                <form id="uploadForm" onSubmit={onSubmitContact}>
                    <fieldset className="fieldset-contacto">
                        <legend>Contacto</legend>
                        <div className="container-3">
                            <div className="info-container">
                                <label htmlFor="name" className="label-required">Nombre</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                <p id="nameError" className="input-msg-error"></p>
                            </div>
                            <div className="info-container">
                                <label htmlFor="mail" className="label-required">Email</label>
                                <input type="email" className="form-control" id="mail" name="mail" value={formData.mail} onChange={handleChange} required />
                                <p id="mailError" className="input-msg-error"></p>
                            </div>
                            <div className="info-container-textarea">
                                <label htmlFor="comment" className="form-label">Comentarios</label>
                                <textarea className="form-control h-textarea-contacto" id="comment" name="comment" value={formData.comment} onChange={handleChange} maxLength="400"></textarea>
                            </div>
                            <div className="info-container">
                                <button type="submit" className="b-alta">Enviar comentarios</button>
                            </div>
                        </div>
                        <img className="fielset-img" src="../img/icons 2/pngwing.com(1).png" alt="Jessie de Toy Story" />
                    </fieldset>
                </form>
            </div>
        </main>
    );
}

export default Contacto;
