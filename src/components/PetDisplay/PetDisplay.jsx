import { useState } from 'react';
import styles from './PetDisplay.module.css';

function PetDisplay(props) {
    const [tempName, setTempName] = useState("");
    const [showFeedback, setShowFeedback] = useState(false);

    const handleNameSubmit = () => {
        if (tempName.trim()) {
            props.onSaveName(tempName);
            setTempName("");
        }
    }

    const handleBond = () => {
        props.onBond();
        setShowFeedback(true);
        setTimeout(() => setShowFeedback(false), 600);
    }

    const isReadyToName = props.bondingLevel >= props.bondTarget;
    const isNamed = !!props.petName;
    const bondProgress = Math.min((props.bondingLevel / props.bondTarget) * 100, 100);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.petName}>{props.name}</h2>

                {/* Pet Sprite */}
                <div className={styles.petSprite}>
                    {props.mood}
                </div>

                {/* Bond Progress */}
                <div className={styles.bondSection}>
                    <p className={styles.bondLabel}>BOND LEVEL</p>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${bondProgress}%` }}></div>
                    </div>
                    <p className={styles.bondText}>{props.bondingLevel} / {props.bondTarget}</p>
                </div>

                {/* The Interaction */}
                {!isNamed && !isReadyToName && (
                    <div className={styles.bonusSection}>
                        <button className={styles.bondBtn} onClick={handleBond}>
                            ❤️ TAP FOR LOVE
                        </button>
                        {showFeedback && <div className={styles.bonusFeedback}>+1 BOND!</div>}
                    </div>
                )}

                {/* Naming Section */}
                {!isNamed && isReadyToName && (
                    <div className={styles.nameSection}>
                        <p className={styles.namePrompt}>YOUR COMPANION IS READY FOR A NAME!</p>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                value={tempName}
                                onChange={(e) => setTempName(e.target.value)}
                                placeholder="Enter a name..."
                                className={styles.nameInput}
                                autoFocus
                            />
                            <button onClick={handleNameSubmit} className={styles.saveBtn}>
                                CONFIRM
                            </button>
                        </div>
                    </div>
                )}

                {isNamed && (
                    <div className={styles.completedSection}>
                        <p className={styles.completedText}>✨ FOREVER BONDED ✨</p>
                        <p className={styles.completedName}>with {props.petName}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default PetDisplay;
