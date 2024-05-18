import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <section class="error-area">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="error-content">
                                <img src="assets/img/404.png" alt="error" />

                                <h3>Page non trouvée</h3>
                                <p>La page que vous recherchez a peut-être été supprimée, son nom a été modifié ou elle est temporairement indisponible.</p>

                                <NavLink to="/" class="btn default-btn">Aller à la page d'accueil <span></span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default NotFound;