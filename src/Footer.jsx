import { FaGithub, FaLinkedin, FaTwitter, FaReact } from 'react-icons/fa';

function Footer() {
    return (
        <footer style={{
            padding: "2rem",
            background: "#222",
            color: "#fff",
            textAlign: "center"
        }}>
            <p>&copy; 2025 Canodelacuadra. Todos los derechos reservados.</p>
            <div style={{
                marginTop: "1rem",
                fontSize: "2rem"
            }}>
                <a href="https://github.com" target="_blank" style={{
                    color: "#fff",
                    margin: "0 1rem"
                }}>
                    <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" style={{
                    color: "#fff",
                    margin: "0 1rem"
                }}>
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" style={{
                    color: "#fff",
                    margin: "0 1rem"
                }}>
                    <FaTwitter />
                </a>
            </div>
            <p>Hecho con React <span
                style={{
                    color: "#1399C4",
                    fontSize: "2rem"
                }}
            ><FaReact /></span> </p>
        </footer>
    );
}

export default Footer;