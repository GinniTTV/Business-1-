import React from 'react';

const Nosotros = () => {
    return (
        <main className="main-container">
            <img className="banner1" src="../img/icons 2/PlayKids-a-place.jpg" alt="banner celeste play kids" />
            <div className="nosotros-container">
                <div className="d-center">
                    <h2>Quiénes Somos</h2>
                    <h3>¡Hola! Juguetería Cósmica es una marca de juguetes para niños y grandes</h3>
                </div>
                <div className="section-container align-center">
                    <img className="img-nosotros" src="./img/vidrierajuguetería1.jpeg" alt="vidriera de la jugueteria, con muchos colores y muchos juguetes" />
                    <p>
                        El mundo necesita lugares llenos de sueños para construir, nos inspiramos en crearlos para la felicidad de los niños, un espléndido mundo de magia, entretenimiento y diversión nos aguarda.
                    </p>
                </div>
                <div className="section-container align-center">
                    <p>
                        Nos entusiasma abrir las puertas a nuevos clientes, y horizontes de creatividad, en conjunto con nuestro catálogo excelente de juguetes en su mejor calidad. Nos contenta trabajar, y brindar la mejor atención a nuestros clientes, y ver reflejado nuestro trabajo en la sonrisa de los niños!
                    </p>
                    <img className="img-nosotros" src="../img/icons 2/niñaysuoso.avif" alt="estantería de la jugueterpia con muchos colores y muchos juguetes" />
                </div>
            </div>
        </main>
    );
}

export default Nosotros;
