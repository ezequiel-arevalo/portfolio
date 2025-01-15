import { Link } from "react-router";

export const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link> 
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link> 
                    </li>
                    <li>
                        <Link to={"/error"}>Error Page</Link> 
                    </li>
                </ul>
            </nav>
        </header>
    );
};
