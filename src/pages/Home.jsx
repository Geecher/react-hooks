import {NavLink} from "react-router";

const Home = () => {
    return (
        <div>
            <h1>Welcome to the React Hooks Demo</h1>
            <p>Выберите хук в меню и посмотрите демонстацию. Или перейдите <NavLink to="/about">по ссылке</NavLink> и прочтите статью перед тем, как приступить.</p>
        </div>
    );
}

export default Home;