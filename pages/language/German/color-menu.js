/* ACHTUNG HAFTUNGSAUSSCHLUSS! */

/*    |---------------------------------------------------------------------------------------------------------------------------------|
/* 
/* Copyright 2025  |  planeteriumprovider
/* 
/* Lizenziert unter der Apache-Lizenz, Version 2.0 (die „Lizenz“);
/* Sie dürfen diese Datei nur in Übereinstimmung mit der Lizenz verwenden.
/* Sie können eine Kopie der Lizenz erhalten unter
/* 
/* http://www.apache.org/licenses/LICENSE-2.0
/* 
/* Sofern nicht gesetzlich vorgeschrieben oder schriftlich vereinbart,
/* Die unter der Lizenz vertriebenen Produkte werden auf einer „AS IS“-Basis vertrieben,
/* OHNE GARANTIEN ODER BEDINGUNGEN JEGLICHER ART, weder ausdrücklich noch stillschweigend.
/* Die spezifischen Sprachbestimmungen für Berechtigungen und
/* Einschränkungen im Rahmen der Lizenz. */

/* Copyright 2025 | planeteriumprovider | Eigentümer: XOIS */

document.addEventListener('DOMContentLoaded', () => {
    const settingsButton = document.getElementById('settings-button');
    const settingsScreen = document.getElementById('color-settings-screen');
    const backFromSettingsButton = document.getElementById('back-from-settings');
    const restartFromSettingsButton = document.getElementById('restart-from-settings');
    const backToGameBtn = document.getElementById('back-to-game');

    // Menü öffnen
    if (settingsButton && settingsScreen) {
        settingsButton.addEventListener('click', () => {
            settingsScreen.style.display = 'flex';
            // Prüfen, welcher Button angezeigt werden soll (GameOver State)
            window.updateColorMenuButtons();
        });
    }

    // Menü schließen
    if (backFromSettingsButton && settingsScreen) {
        backFromSettingsButton.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            if (typeof window.showStartMenu === 'function') {
                window.showStartMenu();
            }
        });
    }

    // Funktion zur Steuerung der Buttons (z.B. nach einem Game Over)
    window.updateColorMenuButtons = function() {
        if (window.calledFromGameOver) {
            if (restartFromSettingsButton) restartFromSettingsButton.style.display = 'inline-block';
            if (backToGameBtn) backToGameBtn.style.display = 'none';
        } else {
            if (restartFromSettingsButton) restartFromSettingsButton.style.display = 'none';
            // backToGameBtn nur zeigen, wenn er im HTML existiert
            if (backToGameBtn) backToGameBtn.style.display = 'inline-block';
        }
    };
});
