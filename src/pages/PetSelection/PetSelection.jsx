import { useNavigate, Link } from 'react-router-dom';
import { usePet } from '../../context/PetContext';
import { useState } from 'react';
import './pet-selection.css';

export default function PetSelection() {
    const navigate = useNavigate();
    const { selectThePet } = usePet();
    const [hoveredId, setHoveredId] = useState(null);

    const pets = [
        { id: 1, name: 'Fox', sprite: '🦊', description: 'Clever & Mischievous' },
        { id: 2, name: 'Cat', sprite: '🐱', description: 'Calm & Independent' },
        { id: 3, name: 'Dog', sprite: '🐶', description: 'Loyal & Playful' },
        { id: 4, name: 'Rabbit', sprite: '🐰', description: 'Gentle & Swift' }
    ];

    const handleSelect = (pet) => {
        selectThePet(pet);
        navigate('/pet');
    };

    return (
        <div className="selection-container">
            <div className="stars-bg">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="star" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`
                    }}></div>
                ))}
            </div>

            <div className="selection-content">
                <div className="selection-header">
                    <h1 className="selection-title">Choose Your Companion</h1>
                    <p className="selection-subtitle">Each pet has a unique personality</p>
                </div>

                <div className="pets-grid">
                    {pets.map(pet => (
                        <button
                            key={pet.id}
                            className="pet-card"
                            onClick={() => handleSelect(pet)}
                            onMouseEnter={() => setHoveredId(pet.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="pet-card-inner">
                                <div className="pet-sprite">{pet.sprite}</div>
                                <div className="pet-info">
                                    <h3 className="pet-name">{pet.name}</h3>
                                    <p className="pet-description">{pet.description}</p>
                                </div>
                                {hoveredId === pet.id && (
                                    <div className="pet-action">ADOPT</div>
                                )}
                            </div>
                        </button>
                    ))}
                </div>

                <Link to="/" className="back-link">
                    <button className="back-button">← BACK HOME</button>
                </Link>
            </div>
        </div>
    );
}