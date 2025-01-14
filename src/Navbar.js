import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li id='commandes'>Commandes</li>
                <li id='tables'>Tables</li>
                <li id='historique'>Historique</li>
            </ul>
            <div className="nav-params">
                <span className='nav-params-icon position-relative'><FontAwesomeIcon icon={faBell} />
                    <span class="badge translate-middle bg-danger rounded-circle" id='notif-badge'>
                        <span class="visually-hidden">New alerts</span>
                    </span>
                </span>
                <span className='nav-params-icon'><FontAwesomeIcon icon={faBars} /></span>
                <p className='logout'>user <span className='nav-params-icon' id='nav-params-icon-logout'><FontAwesomeIcon icon={faArrowRightFromBracket} /></span></p>
            </div>
        </nav>
    )
}