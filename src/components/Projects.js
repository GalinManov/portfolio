import Home from "../assets/home.png"
import Products from "../assets/products.png"
import Per from "../assets/peripheral.png"
import Profile from "../assets/profile.png"
import History from "../assets/productHistory.png"
import Register from "../assets/register.png"
import LifeStyle from '../assets/LifeStyle.png'



export const Projects = () => {
    return (
        <section id="projects-section">
            <h2>My latest project</h2>

            <div className="latest-project">
                <div className="latest-text">
                    <h3>2nd GEN</h3>
                    <p style={{ "maxWidth": "40%", "minWidth": "250px", "margin": "0 auto" }}>
                        An e-shop app for listing and purchasing second-hand hardware. It allows users to register an account.
                        Upon successful login, users are able to access many of the app's features. Among these are putting products up for sale and
                        editting, marking as sold or deleting said products.
                        Users can rate other people's products and also add them to their favorite list.
                    </p>

                </div>
                <div className="latest-pictures">
                    <div className="grid-projects">
                        <div className="project-box">
                            <img className="img-latest" src={Home}></img>
                        </div>
                        <div className="project-box">
                            <img className="img-latest" src={Products}></img>
                        </div>
                        <div className="project-box">
                            <img className="img-latest" src={Per}></img>
                        </div>
                        <div className="project-box">
                            <img className="img-latest" src={Profile}></img>
                        </div>
                        <div className="project-box">
                            <img className="img-latest" src={Register}></img>
                        </div>
                        <div className="project-box">
                            <img className="img-latest" src={History}></img>
                        </div>
                    </div>
                </div>


            </div>


            <h2>Other projects</h2>
            <div className="grid-other">
                <div className="project-box">
                    <h3>Lifestyle app</h3>
                    <p>A Web App that tracks your gym progress and diet!
                        Users can create new workouts for different days of the week and try to reach their daily calory intake goal!
                        It allows you to also keep track of what kind of foods you consume throughout the day and view the nutritional information 
                        about each product (protein, carbs, fats, etc.).

                    </p>
                </div>
                <div className="project-box">
                    <img className="img-other" src={LifeStyle}></img>
                </div>
            </div>


        </section>
    )

};