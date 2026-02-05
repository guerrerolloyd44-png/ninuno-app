import { Link } from 'react-router-dom';
import { usePet } from '../../context/PetContext';
import PetDisplay from "../../components/PetDisplay/PetDisplay";
import './pet-page.css';

export default function PetPage() {
    const { selectedPet, bondingLevel, incrementBond, petName, bondTarget, savePetName } = usePet();

    if (!selectedPet) {
        return (
            <div className="error-container">
                <h2>No Pet Selected!</h2>
                <Link to="/select">
                    <button className="action-button">Go Select a Pet</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="pet-page-container">
            <div className="stars-bg">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="star" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`
                    }}></div>
                ))}
            </div>

            <div className="pet-page-content">
                <div className="page-header">
                    <h1 className="page-title">Your Companion</h1>
                    <p className="page-subtitle">Build your bond through love and care</p>
                </div>

                <PetDisplay
                    name={petName || selectedPet.name}
                    mood={selectedPet.sprite}
                    bondingLevel={bondingLevel}
                    onBond={incrementBond}
                    bondTarget={bondTarget}
                    petName={petName}
                    onSaveName={savePetName}
                />

                <div className="pet-page-footer">
                    <Link to="/select">
                        <button className="footer-button">← CHOOSE ANOTHER</button>
                    </Link>
                    <Link to="/">
                        <button className="footer-button">← HOME</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}