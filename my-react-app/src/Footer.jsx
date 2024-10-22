
function Footer() {
    const birthDate = new Date(1998, 10, 14, 3, 6).getTime();
    const currentDate = new Date().getTime();
    const age = Math.floor((currentDate - birthDate)/(1000*60*60*24*365));
    return(
        <footer>
            <hr />
            <p>Author: Matthew Faler</p>
            <small>
                <p>{age} YO Computer Scientist and Mathematician</p>
                <p><a href="mailto:matthewfaler1@gmail.com">matthewfaler1@gmail.com</a></p>
                <p><a href="https://linkedin.com/in/matthew-faler">LinkedIn</a></p>
                <p><a href="Https://github.com/matthewfaler">GitHub</a></p>
            </small>
            <br />
        </footer>
    );   
}
export default Footer