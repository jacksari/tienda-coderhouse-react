import React from 'react';
import ItemCount from "../counter/ItemCount";

function ProductDetails({course}) {
    //console.log(course)
    // TODO ordenar css para agregar y price description
    const { career, description, img, lessons, level, price, slug, stars, students, subtitle, teacher, title, type_course, duration } = course;

    return (
        <section className="container">
            <div className="container-course-details">
                <div className="container-course-info">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <div className="course-details-statistics">
                        <div className="course-stars">
                            <i className="fas fa-star"/>
                            <p>{stars.toFixed(2)}</p>
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
                        <p>{level.title}</p>
                        <p>{career.title}</p>
                    </div>
                    <div className="teacher">
                        <img src={teacher.user.img} alt=""/>
                        <div className="teacher-name">
                            <p>{ teacher.user.nombre } {teacher.user.apellidos}</p>
                            <p>{ teacher.title }</p>
                        </div>
                    </div>
                </div>
                <div className="container-checkout">
                    <img src={img.url} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
