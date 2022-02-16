import React from 'react';

function ProductDetails({course}) {
    //console.log(course)
    // TODO ordenar css para agregar y price description
    const { image, lessons, stars, students, teacher, title, duration } = course;

    return (
        <section className="container">
            <div className="container-course-details">
                <div className="container-course-info">
                    <h1>{title}</h1>
                    <h2>{'Subtitle'}</h2>
                    <div className="course-details-statistics">
                        <div className="course-stars">
                            <i className="fas fa-star"/>
                            <p>{stars}</p>
                        </div>
                        <div className="course-views">
                            <i className="fas fa-user-friends"/>
                            <p>{students} estudiantes</p>
                        </div>
                        <div className="course-duration">
                            <i className="far fa-clock"/>
                            <p>Duración {duration} horas</p>
                        </div>
                        <div className="course-lesson">
                            <i className="far fa-play-circle"/>
                            <p>{lessons} lecciones</p>
                        </div>
                    </div>
                    <div className="tags">
                        <p>{'Básico'}</p>
                        <p>{'Odontología'}</p>
                    </div>
                    <div className="teacher">
                        <img src={image} alt=""/>
                        <div className="teacher-name">
                            <p>{ 'Mg.' } </p>
                            <p>{ teacher }</p>
                        </div>
                    </div>
                </div>
                <div className="container-checkout">
                    <img src={image} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
